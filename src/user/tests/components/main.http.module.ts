import { Module } from '@nestjs/common';
import { AuthModule } from '../../../auth/auth.module';

const imports = [AuthModule];

export { imports };

@Module({
  imports,
})
export class MainHttpModule {
  static __filename = __filename;
}
