import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Login } from '../combined.interfaces';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(login: Login) {
    const payload = { sub: login.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
