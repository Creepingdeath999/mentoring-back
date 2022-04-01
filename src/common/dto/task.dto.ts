import { IsString, IsOptional } from 'class-validator'

export class AddTask {
  @IsString()
  title: string
  @IsString()
  body: string
  @IsOptional()
  @IsString()
  imageUrl: string
}
