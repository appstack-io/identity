import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import {
  User,
  UserCreateOneInput,
  UserFindOneInput,
  UserRemoveOneInput,
  UserSearchInput,
  UserSearchResult,
  UserUpdateOneInput,
} from '../combined.interfaces';
import { UserLogic } from './user.logic';
import {
  RpcAuthAssertInternalInterceptor,
  RpcAuthenticatedUserId,
  RpcAuthEntityAssertReadableInterceptor,
  RpcAuthEntityAssertWriteableInterceptor,
  RpcAuthRequiredInterceptor,
} from '@appstack-io/authnz';
import {
  RpcRateLimitReadInterceptor,
  RpcRateLimitWriteInterceptor,
} from '@appstack-io/limits';
import { RpcNotFoundException } from '@appstack-io/exceptions';

@Controller()
export class UserController {
  constructor(private logic: UserLogic) {}

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('UserService', 'FindOne')
  async findOne(@Payload() input: UserFindOneInput): Promise<User> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(RpcAuthRequiredInterceptor, RpcRateLimitReadInterceptor)
  @GrpcMethod('UserService', 'FindMe')
  async findMe(@RpcAuthenticatedUserId() userId: string): Promise<User> {
    const found = await this.logic.findOne({ id: userId });
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthAssertInternalInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('UserService', 'CreateOne')
  async createOne(@Payload() input: UserCreateOneInput): Promise<User> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('UserService', 'UpdateOne')
  async updateOne(@Payload() input: UserUpdateOneInput): Promise<User> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(
    RpcAuthAssertInternalInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('UserService', 'RemoveOne')
  async removeOne(@Payload() input: UserRemoveOneInput): Promise<void> {
    await this.logic.removeOne(input);
  }

  // TODO: all searches should filter according to current user
  @UseInterceptors(RpcAuthRequiredInterceptor, RpcRateLimitReadInterceptor)
  @GrpcMethod('UserService', 'Search')
  async search(@Payload() input: UserSearchInput): Promise<UserSearchResult> {
    const users = await this.logic.search(input);
    return {
      meta: { offset: (input.opts.offset || 0) + users.length },
      users,
    };
  }
}
