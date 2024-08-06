import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model, deleteModel } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LogInDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(
    createUserDto: CreateUserDto,
  ): Promise<{ token: string; user: Partial<User> }> {
    const { email, password, userName } = createUserDto;
    if (!email || !password || !userName) {
      throw new UnauthorizedException('All fields are required');
    }
    try {
      const user = await this.userModel.findOne({ email });
      if (user) {
        throw new UnauthorizedException('email already existed');
      }

      const hashPassword = bcrypt.hashSync(password, 12);

      const newUser = await this.userModel.create({
        email,
        userName,
        password: hashPassword,
      });

      const userObj = newUser.toObject();

      delete userObj.password;

      const token = this.jwtService.sign({ id: newUser._id });

      return { token, user: userObj };
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async logIn(
    logInDto: LogInDto,
  ): Promise<{ token: string; user: Partial<User> }> {
    const { email, password } = logInDto;
    if (!email || !password) {
      throw new UnauthorizedException('All fields are required');
    }
    try {
      const user = await this.userModel.findOne({ email });

      if (!user) {
        throw new UnauthorizedException('user not found');
      }

      const verifyPassword = bcrypt.compareSync(password, user.password);

      if (!verifyPassword) {
        throw new UnauthorizedException('Invalid email or password');
      }

      const token = this.jwtService.sign({ id: user._id });

      const userObj = user.toObject();

      delete userObj.password;

      return { token, user: userObj };
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
