import { SsoClientService } from './sso-client.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { injectApiProvider } from './utils/providers';
import { UserApi } from './client/generated';

@Module({
  imports: [
    HttpModule.register({
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  ],
  providers: [SsoClientService, injectApiProvider(UserApi)],
  exports: [SsoClientService],
})
export class SsoClientModule {}
