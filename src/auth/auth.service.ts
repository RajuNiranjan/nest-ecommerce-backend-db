import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './schema/auth.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthRegisterDto } from './dto/register.dto';

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
}
