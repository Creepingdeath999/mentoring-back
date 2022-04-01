import { IsString } from 'class-validator'

export class FinishedTask {
  @IsString()
  student: string
  @IsString()
  taskID: string
}
