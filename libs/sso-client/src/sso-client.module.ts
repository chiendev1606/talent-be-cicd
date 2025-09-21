import { SsoClientService } from './sso-client.service';
import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { injectApiProvider } from './utils/providers';
import { AuthApi, UserApi } from './client/generated';

// TODO: make it as a dynamic module
@Global()
@Module({
  imports: [
    HttpModule.register({
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  ],
  providers: [
    SsoClientService,
    injectApiProvider(UserApi),
    injectApiProvider(AuthApi),
  ],
  exports: [SsoClientService],
})
export class SsoClientModule {}
