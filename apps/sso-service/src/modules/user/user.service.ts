import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getMe(id: number) {
    const user = await this.databaseService.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }
}
