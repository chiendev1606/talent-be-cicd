import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserController } from './user.controller';
import { SsoClientModule } from '@nnpp/sso-client';
import { TalentClientModule } from '../../external/talent-client/talent-client.module';

@Module({
  imports: [TalentClientModule, SsoClientModule],
  controllers: [UserController],
})
export class UserModule {}
