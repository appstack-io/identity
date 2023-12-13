import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginModule } from '../login/login.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { LocalController } from './strategies/local/local.controller';
import { LoginLogic } from '../login/login.logic';
import { UserLogic } from '../user/user.logic';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { JwtStrategy } from './strategies/jwt/jwt.strategy';
import { StrategyService } from './strategies/strategy.service';
import { GoogleStrategy } from './strategies/google/google.strategy';
import { GoogleController } from './strategies/google/google.controller';
import * as process from 'process';

@Module({
  imports: [
    LoginModule,
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRY },
    }),
  ],
  controllers: [LocalController, GoogleController],
  providers: [
    AuthService,
    StrategyService,
    LocalStrategy,
    GoogleStrategy,
    LoginLogic,
    UserLogic,
    UserService,
    JwtStrategy,
  ],
})
export class AuthModule {}
