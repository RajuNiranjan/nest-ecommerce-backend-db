import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

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
}
