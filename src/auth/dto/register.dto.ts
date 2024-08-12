import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthRegisterDto {
  @IsNotEmpty({ message: 'User Name should not be empty' })
  @IsString()
  readonly userName: string;

  @IsNotEmpty({ message: 'email should not be empty' })
  @IsEmail({}, { message: 'emial must be a valid email address' })
  readonly email: string;

  @IsNotEmpty({ message: 'password should not be empty' })
  @IsString()
  @Length(6, 15, { message: 'password must be between 6 to 15 characters' })
  readonly password: string;
}
