import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SsoClientModule } from '@nnpp/sso-client';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [SsoClientModule, AuthModule, UserModule],
})
export class AppModule {}
