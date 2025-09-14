import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
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
