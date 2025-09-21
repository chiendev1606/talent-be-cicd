import { Controller, Get } from '@nestjs/common';
import { TalentClientService } from '@nnpp/talent-client/talent-client.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly talentClientService: TalentClientService) {}

  @Get()
  getJobs() {
    return this.talentClientService.getJobs();
  }
}
