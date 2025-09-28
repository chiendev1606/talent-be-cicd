import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly databaseService: DatabaseService) {}

  getProfiles(candidateId: number) {
    return this.databaseService.prisma.profile.findMany({
      where: {
        candidateId,
      },
    });
  }

  createProfile(body: CreateProfileDto) {
    return this.databaseService.prisma.profile.create({
      data: body,
    });
  }
}
