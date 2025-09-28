import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateJobRequest } from '@nnpp/talent-client/client/generated';
import { TalentClientService } from '@nnpp/talent-client/talent-client.service';
import { SsoClientService } from '@nnpp/sso-client';

@Controller('jobs')
export class JobController {
  constructor(
    private readonly talentClientService: TalentClientService,
    private readonly ssoClientService: SsoClientService,
  ) {}

  @Get()
  getJobs() {
    return this.talentClientService.getJobs();
  }

  @Post()
  async createJob(
    @Body() body: CreateJobRequest,
    @Req() req: Request & { user: { id: string } },
  ) {
    const userId = Number(req.user.id);

    body.recruiterId = userId;
    const recruiter = await this.ssoClientService.findUserById(userId);

    if (!recruiter) {
      throw new NotFoundException('Recruiter not found');
    }

    const job = await this.talentClientService.createJob(body);

    return {
      ...job,
      recruiter,
    };
  }
}
