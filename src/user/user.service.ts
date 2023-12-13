import { Injectable, OnModuleInit } from '@nestjs/common';
import { ArangodbService } from '@appstack-io/arangodb';
import { DocumentCollection } from 'arangojs/collection';
import {
  User,
  UserCreateOneInput,
  UserFindOneInput,
  UserRemoveOneInput,
  UserSearchInput,
  UserUpdateOneInput,
} from '../combined.interfaces';

@Injectable()
export class UserService implements OnModuleInit {
  collection: DocumentCollection;

  constructor(private arangodb: ArangodbService) {
    this.collection = this.arangodb.db.collection('user');
  }

  async createOne(input: Partial<UserCreateOneInput>): Promise<User> {
    try {
      return this.arangodb.utils.format(
        (
          await this.collection.save(this.arangodb.utils.addTs(input), {
            returnNew: true,
          })
        ).new,
      );
    } catch (e) {
      throw e;
    }
  }

  async findOne(input: UserFindOneInput): Promise<User | void> {
    try {
      return this.arangodb.utils.format(
        await this.collection.document(input.id),
      );
    } catch (e) {
      if (e.message === 'document not found') {
        return;
      }
      throw e;
    }
  }

  async updateOne(input: Partial<UserUpdateOneInput>): Promise<User> {
    return this.arangodb.utils.format(
      (
        await this.collection.update(
          input.id,
          this.arangodb.utils.addUpdatedAt(input),
          { returnNew: true },
        )
      ).new,
    );
  }

  async removeOne(input: UserRemoveOneInput): Promise<void> {
    await this.collection.remove(input.id);
  }

  async search(input: UserSearchInput): Promise<User[]> {
    const { filter, opts } = input;
    const query = `
      FOR doc IN userSearch
      SEARCH ANALYZER(doc.name IN TOKENS(@name, 'text_en'), 'text_en')
      OPTIONS { waitForSync: @waitForSync }
      SORT BM25(doc) DESC, doc.name ASC
      LIMIT @offset, @limit
      RETURN doc
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
      waitForSync: Boolean(opts.waitForSync),
    };
    const cursor = await this.arangodb.db.query(query, vars);
    return (await cursor.all()).map(this.arangodb.utils.format);
  }

  async onModuleInit(): Promise<void> {
    await this.arangodb.utils.tryDdl(
      () => this.arangodb.db.createCollection('user', {}),
      () =>
        this.arangodb.db.view('userSearch').create({
          type: 'arangosearch',
          links: {
            user: {
              analyzers: ['text_en'],
              fields: {
                name: {},
              },
              includeAllFields: false,
              storeValues: 'none',
              trackListPositions: false,
            },
          },
        }),
    );
  }
}
