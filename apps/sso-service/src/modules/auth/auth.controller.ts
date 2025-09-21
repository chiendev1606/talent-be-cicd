import { Body, Controller, Logger, Post } from '@nestjs/common';
import { LoginDto } from '../user/dto/login.dto';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly userService: UserService) {}

  @Post('login')
  login(@Body() data: LoginDto) {
    this.logger.log(`Login request with email: ${data.email}`);

    try {
      return this.userService.login(data);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
