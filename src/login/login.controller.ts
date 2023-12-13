import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import {
  Login,
  LoginCreateOneInput,
  LoginFindByPlatformIdInput,
  LoginFindOneInput,
  LoginFindWhereInput,
  LoginRemoveOneInput,
  LoginUpdateOneInput,
} from '../combined.interfaces';
import { LoginLogic } from './login.logic';
import {
  RpcAuthEntityAssertReadableInterceptor,
  RpcAuthEntityAssertWriteableInterceptor,
  RpcAuthEntityCreateOwnershipInterceptor,
} from '@appstack-io/authnz';
import {
  RpcRateLimitReadInterceptor,
  RpcRateLimitWriteInterceptor,
} from '@appstack-io/limits';
import { RpcNotFoundException } from '@appstack-io/exceptions';

@Controller()
export class LoginController {
  constructor(private logic: LoginLogic) {}

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('LoginService', 'FindOne')
  async findOne(@Payload() input: LoginFindOneInput): Promise<Login> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('LoginService', 'FindWhere')
  async findWhere(@Payload() input: LoginFindWhereInput): Promise<Login> {
    const found = await this.logic.findWhere(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('LoginService', 'FindByPlatformId')
  async findByPlatformId(
    @Payload() input: LoginFindByPlatformIdInput,
  ): Promise<Login> {
    const found = await this.logic.findByPlatformId(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthEntityCreateOwnershipInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('LoginService', 'CreateOne')
  async createOne(@Payload() input: LoginCreateOneInput): Promise<Login> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('LoginService', 'UpdateOne')
  async updateOne(@Payload() input: LoginUpdateOneInput): Promise<Login> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('LoginService', 'RemoveOne')
  async removeOne(@Payload() input: LoginRemoveOneInput): Promise<void> {
    await this.logic.removeOne(input);
  }
}
