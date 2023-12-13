import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginLogic } from '../../login/login.logic';
import { UserLogic } from '../../user/user.logic';
import { Credentials, Login, User } from '../../combined.interfaces';

@Injectable()
export class StrategyService {
  constructor(private loginLogic: LoginLogic, private userLogic: UserLogic) {}

  async validate(
    platform: string,
    platformLoginId: string,
    platformLoginSecret: string,
    user: Partial<User>,
    credentials: Partial<Credentials>,
  ): Promise<Partial<Login>> {
    const exists = await this.loginLogic.findByPlatformId({
      platform,
      platformLoginId,
    });
    if (exists) {
      return await this.signin(
        platform,
        platformLoginId,
        platformLoginSecret,
        user,
        credentials,
      );
    }
    return this.signup(
      platform,
      platformLoginId,
      platformLoginSecret,
      user,
      credentials,
    );
  }

  private async signin(
    platform: string,
    platformLoginId: string,
    platformLoginSecret: string,
    user: Partial<User>,
    credentials: Partial<Credentials>,
  ): Promise<Partial<Login>> {
    const login = await this.loginLogic.findWhere({
      platform,
      platformLoginId,
      platformLoginSecret,
    });
    if (!login) {
      throw new UnauthorizedException();
    }
    await this.loginLogic.updateOne({ ...login, credentials });
    await this.userLogic.updateOne({ id: login.userId, ...user });
    return { userId: login.userId };
  }

  private async signup(
    platform: string,
    platformLoginId: string,
    platformLoginSecret: string,
    user: Partial<User>,
    credentials: Partial<Credentials>,
  ): Promise<Partial<Login>> {
    const createdUser = await this.userLogic.createOne({ ...user });
    const login = await this.loginLogic.createOne({
      platform,
      platformLoginId,
      platformLoginSecret,
      userId: createdUser.id,
      credentials,
    });
    return { userId: login.userId, isNew: true };
  }
}
