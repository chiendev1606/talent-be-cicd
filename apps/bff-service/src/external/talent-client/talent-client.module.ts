import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TalentClientService } from './talent-client.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:5052',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  ],
  providers: [TalentClientService],
  exports: [TalentClientService],
})
export class TalentClientModule {}
