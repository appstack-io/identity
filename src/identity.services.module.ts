import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ArangodbModule } from '@appstack-io/arangodb';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { LimitsModule } from '@appstack-io/limits/dist/limits.module';
import { PermissionModule } from '@appstack-io/permissions';

@Module({
  imports: [
    UserModule,
    LoginModule,
    ArangodbModule,
    LimitsModule,
    PermissionModule,
    AuthModule,
  ],
})
export class IdentityServicesModule {
  static getDirname() {
    return __dirname;
  }
}
