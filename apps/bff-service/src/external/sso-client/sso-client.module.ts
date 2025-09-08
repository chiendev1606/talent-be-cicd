import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SsoClientService } from './sso-client.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:5051',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  ],
  providers: [SsoClientService],
  exports: [SsoClientService],
})
export class SsoClientModule {}
