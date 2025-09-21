import { JobService } from './job.service';
import { JobController } from './job.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
