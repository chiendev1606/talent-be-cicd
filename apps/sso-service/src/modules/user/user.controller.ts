import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post()
  register(@Body() body: CreateUserDto) {
    return this.userService.register(body);
  }

  @Get('me')
  getMe() {
    return this.userService.getMe(1);
  }

  @Get(':userId')
  async findUserById(@Param('userId', ParseIntPipe) userId: number) {
    const user = await this.userService.findUserById(userId);
    return {
      ...user,
      password: '',
    };
  }
}
