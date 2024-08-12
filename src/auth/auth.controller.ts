import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/register.dto';
import { Auth } from './schema/auth.schema';
import { AuthLogInDto } from './dto/logIn.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(
    @Body() createUserDto: AuthRegisterDto,
  ): Promise<{ token: string; user: Partial<Auth> }> {
    return this.authService.UserRegister(createUserDto);
  }

  @Post('login')
  logInUser(
    @Body() logInDto: AuthLogInDto,
  ): Promise<{ token: string; user: Partial<Auth> }> {
    return this.authService.logIn(logInDto);
  }
}
