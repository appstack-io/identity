import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { LoginLogic } from './login.logic';
import { ClientModule } from '@appstack-io/client';
import { LimitsModule } from '@appstack-io/limits';
import { ArangodbModule } from '@appstack-io/arangodb';

@Module({
  imports: [ClientModule, LimitsModule, ArangodbModule],
  controllers: [LoginController],
  providers: [LoginService, LoginLogic],
  exports: [LoginService],
})
export class LoginModule {
  static getDirname() {
    return __dirname;
  }
}
