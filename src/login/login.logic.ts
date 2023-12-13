import { Injectable } from '@nestjs/common';
import {
  Login,
  LoginCreateOneInput,
  LoginFindByPlatformIdInput,
  LoginFindOneInput,
  LoginFindWhereInput,
  LoginRemoveOneInput,
  LoginUpdateOneInput,
} from '../combined.interfaces';
import { LoginService } from './login.service';

@Injectable()
export class LoginLogic {
  constructor(private service: LoginService) {}

  async createOne(input: Partial<LoginCreateOneInput>): Promise<Login> {
    return await this.service.createOne(input);
  }

  async findOne(input: LoginFindOneInput): Promise<Login | void> {
    return await this.service.findOne(input);
  }

  async findWhere(input: LoginFindWhereInput): Promise<Login | void> {
    return await this.service.findWhere(input);
  }

  async updateOne(input: Partial<LoginUpdateOneInput>): Promise<Login> {
    return await this.service.updateOne(input);
  }

  async findByPlatformId(
    input: LoginFindByPlatformIdInput,
  ): Promise<Login | void> {
    return await this.service.findByPlatformId(input);
  }

  async removeOne(input: LoginRemoveOneInput): Promise<void> {
    await this.service.removeOne(input);
  }
}
