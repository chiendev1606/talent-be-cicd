import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import {
  AuthApi,
  CreateUserRequest,
  LoginRequest,
  UserApi,
  VerifyTokenRequest,
} from './client/generated';

@Injectable()
export class SsoClientService {
  constructor(
    private readonly userApi: UserApi,
    private readonly authApi: AuthApi,
  ) {}

  async createUser(data: CreateUserRequest) {
    try {
      const res = await this.userApi.createUser({
        createUserRequest: data,
      });

      return res.data;
    } catch (error: any) {
      if (error.response.status === 400) {
        throw new BadRequestException(error.response.data);
      }

      throw error;
    }
  }

  async login(data: LoginRequest) {
    try {
      const res = await this.authApi.login({
        loginRequest: data,
      });

      return res.data;
    } catch (error: any) {
      if (error.response.status === 400) {
        throw new BadRequestException(error.response.data);
      }

      if (error.response.status === 401) {
        throw new UnauthorizedException(error.response.data);
      }

      throw error;
    }
  }

  async verifyToken(data: VerifyTokenRequest) {
    try {
      const res = await this.authApi.verifyToken({
        verifyTokenRequest: data,
      });

      return res.data;
    } catch (error: any) {
      if (error.response.status === 400) {
        throw new BadRequestException(error.response.data);
      }

      if (error.response.status === 401) {
        throw new UnauthorizedException(error.response.data);
      }

      throw error;
    }
  }

  async findUserById(userId: number) {
    try {
      const res = await this.userApi.getUserById({ id: userId });
      return res.data;
    } catch (error: any) {
      throw error;
    }
  }
}
