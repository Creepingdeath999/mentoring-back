import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'

@Module({
  imports: [DatabaseModule],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
