import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TalentClientService {
  constructor(private readonly httpService: HttpService) {}

  async getProfiles() {
    const response = await this.httpService
      .request({
        method: 'GET',
        url: '/api/profiles',
      })
      .toPromise();

    return response?.data;
  }
}
