import { Body, Controller, Get, Logger, Post, Req } from '@nestjs/common';
import { SsoClientService } from '@nnpp/sso-client';
import { CreateUserRequest } from '@nnpp/sso-client/client/generated';
import { Public } from '../guard/public.decorator';
import { Request } from 'express';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly ssoClientService: SsoClientService) {}

  @Public()
  @Post()
  async register(@Body() body: CreateUserRequest) {
    try {
      const res = await this.ssoClientService.createUser(body);
      return res;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Get('me')
  getMe(@Req() req: Request & { user: { id: string; email: string } }) {
    // TODO: call to sso client service to get user detail
    return req.user;
  }
}
