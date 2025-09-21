import { Body, Controller, Logger, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from '../user/user.service';
import { VerifyTokenDto } from './dto/verify-token.dto';

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

  @Post('verify-token')
  verifyToken(@Body() data: VerifyTokenDto) {
    this.logger.log(`Verify token request with token: ${data.token}`);

    try {
      return this.userService.verifyToken(data);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
