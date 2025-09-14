import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserRequest, UserApi } from './client/generated';

@Injectable()
export class SsoClientService {
  constructor(private readonly userApi: UserApi) {}

  async createUser(data: CreateUserRequest) {
    try {
      const res = await this.userApi.createUser({
        createUserRequest: data,
      });

      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        throw new BadRequestException(error.response.data);
      }

      throw new InternalServerErrorException(error.response.data);
    }
  }
}
