import {
  IsString,
  IsEmail,
  IsArray,
  IsNumber,
  IsOptional,
} from 'class-validator'

export class AddMentor {
  @IsString()
  name: string
  @IsString()
  lastname: string
  @IsString()
  password: string
  @IsEmail()
  email: string
  @IsArray()
  categories: string[]
}

export class EditMentor {
  @IsString()
  @IsOptional()
  name: string
  @IsString()
  @IsOptional()
  lastname: string
  @IsString()
  @IsOptional()
  password: string
  @IsOptional()
  @IsArray()
  categories: string[]
}

export class FindMentor {
  @IsArray()
  @IsOptional()
  categories?: Array<string>
  @IsNumber()
  @IsOptional()
  limit?: number
  @IsNumber()
  @IsOptional()
  skip?: number
}
