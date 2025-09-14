import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { SsoClientService } from '@nnpp/sso-client';
import { CreateUserRequest } from '@nnpp/sso-client/client/generated';

@Controller('users')
export class UserController {
  constructor(private readonly ssoClientService: SsoClientService) {}

  @Post()
  async register(@Body() body: CreateUserRequest) {
    try {
      const res = await this.ssoClientService.createUser(body);
      return res;
    } catch (error) {
      throw error;
    }
  }

  // @Get('me')
  // async getMe() {
  //   const me = await this.ssoClientService.getMe();
  //   const profiles = await this.talentClientService.getProfiles();

  //   return {
  //     ...me,
  //     profiles,
  //   };
  // }
}
