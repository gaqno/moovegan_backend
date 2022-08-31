import { IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  email: string;

  @IsString()
  @Length(6, 12)
  password: string;
}
