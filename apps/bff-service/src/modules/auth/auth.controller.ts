import { Body, Controller, Post } from '@nestjs/common';
import { SsoClientService } from '@nnpp/sso-client';
import { LoginRequest } from '@nnpp/sso-client/client/generated';
import { Public } from '../guard/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly ssoClientService: SsoClientService) {}

  @Public()
  @Post('login')
  async login(@Body() body: LoginRequest) {
    return this.ssoClientService.login(body);
  }
}
