import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
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
}
