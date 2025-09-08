import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SsoClientService {
  constructor(private readonly httpService: HttpService) {}

  async getMe() {
    const response = await this.httpService
      .request({
        method: 'GET',
        url: '/api/users/me',
      })
      .toPromise();

    return response?.data;
  }
}
