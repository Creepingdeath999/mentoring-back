import { IsString, IsEmail, IsOptional } from 'class-validator'

export class CreateStudent {
  @IsString()
  name: string
  @IsString()
  lastname: string
  @IsString()
  password: string
  @IsEmail()
  email: string
  @IsEmail()
  mentorEmail: string
}

export class EditStudent {
  @IsString()
  @IsOptional()
  name: string
  @IsString()
  @IsOptional()
  lastname: string
  @IsOptional()
  @IsString()
  password: string
}
