import { IsString, IsOptional } from 'class-validator'

class Task {
  @IsString()
  title: string
  @IsString()
  body: string
  @IsString()
  category: string
  @IsOptional()
  @IsString()
  imageUrl: string
}

export class AddTask extends Task {}
export class EditTask extends Task {}
export class DeleteTask extends Task {}
