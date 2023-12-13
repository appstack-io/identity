import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Login } from '../../../combined.interfaces';
import { StrategyService } from '../strategy.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private strategyService: StrategyService) {
    super();
  }

  async validate(username: string, password: string): Promise<Partial<Login>> {
    return await this.strategyService.validate(
      'local',
      username,
      password,
      {},
      { local: { username, password } },
    );
  }
}
