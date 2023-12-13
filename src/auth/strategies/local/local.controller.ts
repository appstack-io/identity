import {
  Controller,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from '../../auth.service';
import { AuthGuard } from '@nestjs/passport';
import { HttpAuthAssertInternalInterceptor } from '@appstack-io/authnz';

@Controller('auth')
export class LocalController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @UseInterceptors(HttpAuthAssertInternalInterceptor)
  @Post('local/login')
  async login(@Request() req) {
    const jwt = await this.authService.login(req.user);
    return { ...req.user, ...jwt };
  }
}
