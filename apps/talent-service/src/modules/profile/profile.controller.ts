import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getProfiles(@Query('candidateId', ParseIntPipe) candidateId: number) {
    return this.profileService.getProfiles(candidateId);
  }

  @Post()
  createProfile(@Body() body: CreateProfileDto) {
    return this.profileService.createProfile(body);
  }
}
