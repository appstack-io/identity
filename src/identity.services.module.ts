import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ArangodbModule } from '@appstack-io/arangodb';
import { LoginModule } from './login/login.module';
import { ClientModule } from '@appstack-io/client';
import { AuthModule } from './auth/auth.module';
import { LimitsModule } from '@appstack-io/limits/dist/limits.module';

@Module({
  imports: [
    UserModule,
    LoginModule,
    ArangodbModule,
    ClientModule,
    AuthModule,
    LimitsModule,
  ],
})
export class IdentityServicesModule {
  static getDirname() {
    return __dirname;
  }
}
