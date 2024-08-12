import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  ValidateIf,
} from 'class-validator';

export class AuthLogInDto {
  @ValidateIf((o) => !o.email)
  @IsNotEmpty({ message: 'User Name should not be empty' })
  @IsString()
  readonly userName: string;

  @ValidateIf((o) => !o.userName)
  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail({}, { message: 'emial must be a valid email address' })
  readonly email: string;

  @IsNotEmpty({ message: 'password should not be empty' })
  @IsString()
  @Length(6, 15, { message: 'password must be between 6 to 15 characters' })
  readonly password: string;
}
