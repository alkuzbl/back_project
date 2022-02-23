import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @MinLength(7)
  @MaxLength(12)
  public password: string;

  @IsString()
  public avatar: string;

  @IsString()
  public name: string;
}
