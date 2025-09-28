import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateJobRequest, TalentApi } from './client/generated';

@Injectable()
export class TalentClientService {
  private readonly logger = new Logger(TalentClientService.name);

  constructor(private readonly talentApi: TalentApi) {}

  async getJobs() {
    try {
      const res = await this.talentApi.getJobs();
      return res.data;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async createJob(body: CreateJobRequest) {
    try {
      const res = await this.talentApi.createJob({ createJobRequest: body });
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        throw new BadRequestException(error.response.data);
      }

      throw error;
    }
  }
}
