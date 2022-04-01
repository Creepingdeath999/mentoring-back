import { IsString, IsNumber, IsEmail, IsOptional } from 'class-validator'

class Grade {
  @IsNumber()
  grade: number
  @IsString()
  @IsEmail()
  mentor: string
  @IsString()
  @IsString()
  taskId: string
  @IsEmail()
  student: string
}

export class AddGrade extends Grade {}
export class EditGrade extends Grade {}
export class DeleteGrade extends Grade {}

export class GetGrade extends Grade {
  @IsNumber()
  @IsOptional()
  limit?: number
  @IsNumber()
  @IsOptional()
  skip?: number
}
