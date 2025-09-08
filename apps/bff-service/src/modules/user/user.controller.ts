import { Controller, Get } from '@nestjs/common';
import { SsoClientService } from '../../external/sso-client/sso-client.service';
import { TalentClientService } from '../../external/talent-client/talent-client.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly ssoClientService: SsoClientService,
    private readonly talentClientService: TalentClientService,
  ) {}

  @Get('me')
  async getMe() {
    const me = await this.ssoClientService.getMe();
    const profiles = await this.talentClientService.getProfiles();

    return {
      ...me,
      profiles,
    };
  }
}
