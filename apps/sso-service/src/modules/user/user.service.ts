import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

export type TokenPayload = {
  sub: string;
  email: string;
};

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async register(body: CreateUserDto) {
    const { email } = body;
    const existingUser = await this.databaseService.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const user = await this.databaseService.prisma.user.create({
      data: body,
    });
    return user;
  }

  async getMe(id: number) {
    const user = await this.databaseService.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async login(data: { email: string; password: string }) {
    const { email, password } = data;

    let error: string | null = null;

    const user = await this.databaseService.prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      error = 'Invalid email or password';
      this.logger.error(error);
      throw new UnauthorizedException(error);
    }

    // jwt
    const payload = {
      sub: user.id,
      email: user.email,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
    };
  }

  async verifyToken(data: { token: string }) {
    const { token } = data;

    try {
      const decoded: TokenPayload = await this.jwtService.verifyAsync(token);
      return decoded;
    } catch (error) {
      this.logger.error(error);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
