import { Module } from '@nestjs/common';
import { PermissionModule } from '@appstack-io/permissions';
import { LoginModule } from '../../login.module';
import { UserModule } from '../../../user/user.module';

const imports = [PermissionModule, LoginModule, UserModule];

export { imports };

@Module({
  imports,
})
export class MainMicroservicesModule {
  static __filename = __filename;
}
