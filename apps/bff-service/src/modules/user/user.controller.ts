import { Body, Controller, Logger, Post } from '@nestjs/common';
import { SsoClientService } from '@nnpp/sso-client';
import { CreateUserRequest } from '@nnpp/sso-client/client/generated';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly ssoClientService: SsoClientService) {}

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
