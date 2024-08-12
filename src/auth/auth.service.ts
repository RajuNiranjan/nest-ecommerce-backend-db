import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './schema/auth.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthRegisterDto } from './dto/register.dto';
import { AuthLogInDto } from './dto/logIn.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) readonly AuthModel: Model<Auth>,
    private readonly jwtService: JwtService,
  ) {}

  async UserRegister(
    authUserDto: AuthRegisterDto,
  ): Promise<{ token: string; user: Partial<Auth> }> {
    const { email, password, userName } = authUserDto;
    if (!email) {
      throw new BadRequestException('Email is required');
    }
    if (!password) {
      throw new BadRequestException('Password is required');
    }
    if (!userName) {
      throw new BadRequestException('Username is required');
    }

    const existingUser = await this.AuthModel.findOne({
      $or: [{ email }, { userName }],
    });

    if (existingUser) {
      throw new ConflictException('email or username is already in use');
    }

    const hashPassword = bcrypt.hashSync(password, 12);

    const newUser = await this.AuthModel.create({
      email,
      userName,
      password: hashPassword,
    });

    const token = this.jwtService.sign({ id: newUser._id });

    const userObj = newUser.toObject();
    delete userObj.password;

    return { token, user: userObj };
  }

  async logIn(
    logInDto: AuthLogInDto,
  ): Promise<{ token: string; user: Partial<Auth> }> {
    const { email, password, userName } = logInDto;

    if ((!email && !userName) || !password) {
      throw new NotFoundException('All fields are required');
    }

    const user = await this.AuthModel.findOne({
      $or: [{ email }, { userName }],
    });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    const verifyPassword = bcrypt.compareSync(password, user.password);

    if (!verifyPassword) {
      throw new UnauthorizedException('invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });

    const userObj = user.toObject();

    delete userObj.password;

    return { token, user: userObj };
  }
}
