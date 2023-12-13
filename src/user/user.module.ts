import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserLogic } from './user.logic';
import { ArangodbModule } from '@appstack-io/arangodb';
import { LimitsModule } from '@appstack-io/limits';

@Module({
  imports: [LimitsModule, ArangodbModule],
  controllers: [UserController],
  providers: [UserService, UserLogic],
})
export class UserModule {
  static getDirname() {
    return __dirname;
  }
}
