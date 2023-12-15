import { Injectable } from '@nestjs/common';
import {
  User,
  UserCreateOneInput,
  UserFindOneInput,
  UserRemoveOneInput,
  UserSearchInput,
  UserUpdateOneInput,
} from '../combined.interfaces';
import { UserService } from './user.service';
import { PermissionLogic } from '@appstack-io/permissions/dist/permission.logic';

@Injectable()
export class UserLogic {
  constructor(
    private service: UserService,
    private permissions: PermissionLogic,
  ) {}

  async createOne(input: Partial<UserCreateOneInput>): Promise<User> {
    const created = await this.service.createOne(input);
    await this.permissions.createOne({
      permittedEntityId: created.id,
      permittedEntity: 'user',
      entity: 'user',
      entityId: created.id,
      action: '*',
    });
    return created;
  }

  async findOne(input: UserFindOneInput): Promise<User | void> {
    return await this.service.findOne(input);
  }

  async updateOne(input: Partial<UserUpdateOneInput>): Promise<User> {
    return await this.service.updateOne(input);
  }

  async removeOne(input: UserRemoveOneInput): Promise<void> {
    await this.service.removeOne(input);
  }

  async search(input: UserSearchInput): Promise<User[]> {
    return await this.service.search(input);
  }
}
