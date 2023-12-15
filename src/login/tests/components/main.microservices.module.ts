import { Module } from '@nestjs/common';
import { LoginModule } from '../../login.module';
import { UserModule } from '../../../user/user.module';

const imports = [LoginModule, UserModule];

export { imports };

@Module({
  imports,
})
export class MainMicroservicesModule {
  static __filename = __filename;
}
