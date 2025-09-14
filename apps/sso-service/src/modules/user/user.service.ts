import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

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
}
