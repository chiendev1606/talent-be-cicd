import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserController } from './user.controller';
import { SsoClientModule } from '../../external/sso-client/sso-client.module';
import { TalentClientModule } from '../../external/talent-client/talent-client.module';

@Module({
  imports: [SsoClientModule, TalentClientModule],
  controllers: [UserController],
})
export class UserModule {}
