import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './schema/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ token: string; user: Partial<User> }> {
    return this.authService.register(createUserDto);
  }
}
