import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SsoClientModule } from '@nnpp/sso-client';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/guard/auth.guard';

@Module({
  imports: [SsoClientModule, AuthModule, UserModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
