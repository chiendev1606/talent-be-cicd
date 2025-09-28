import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SsoClientModule } from '@nnpp/sso-client';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/guard/auth.guard';
import { TalentClientModule } from '@nnpp/talent-client';
import { JobModule } from './modules/job/job.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [
    SsoClientModule,
    TalentClientModule,
    AuthModule,
    UserModule,
    JobModule,
    ProfileModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
