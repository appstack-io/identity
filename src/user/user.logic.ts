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
import {
  ClientService,
  PermissionServiceClient,
  PermissionServiceDefinition,
} from '@appstack-io/client';

@Injectable()
export class UserLogic {
  private permissionServiceClient: PermissionServiceClient;

  constructor(
    private service: UserService,
    private clientService: ClientService,
  ) {
    this.permissionServiceClient = this.clientService.getServiceInternalClient(
      PermissionServiceDefinition,
    );
  }

  async createOne(input: Partial<UserCreateOneInput>): Promise<User> {
    const created = await this.service.createOne(input);
    await this.permissionServiceClient.createOne({
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
