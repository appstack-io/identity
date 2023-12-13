import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../auth.service';
import { Response } from 'express';

@Controller('auth/google')
export class GoogleController {
  constructor(private authService: AuthService) {
    return;
  }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    return;
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async redirect(@Req() req, @Res() res: Response) {
    const jwt = await this.authService.login(req.user);
    res.cookie(process.env.COOKIE_NAME, jwt.accessToken, {
      httpOnly: process.env.COOKIE_HTTP_ONLY === 'true',
      secure: process.env.COOKIE_SECURE === 'true',
      sameSite: process.env.COOKIE_SAME_SITE === 'true',
    });
    return res.redirect(process.env.WEB_CLIENT_URL);
  }
}
