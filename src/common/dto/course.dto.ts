import { IsString, IsOptional } from 'class-validator'

export class Course {
  @IsString()
  title: string
  @IsString()
  description: string
  @IsString()
  @IsOptional()
  category: string
}
