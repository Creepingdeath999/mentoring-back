import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
  StudentRepositry,
  MentoRepository,
  GradeRepository,
  TaskRepository,
} from './repositories'
import { FinishedTaskRepository } from './repositories/finished.repository'
import {
  FinishedTasksSchema,
  GradeSchema,
  MentorSchema,
  StudentSchema,
  TaskSchema,
} from './schema'
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Student', schema: StudentSchema },
      { name: 'Mentor', schema: MentorSchema },
      { name: 'Task', schema: TaskSchema },
      { name: 'FinishedTask', schema: FinishedTasksSchema },
      { name: 'Grade', schema: GradeSchema },
    ]),
  ],
  providers: [
    StudentRepositry,
    MentoRepository,
    GradeRepository,
    TaskRepository,
    FinishedTaskRepository,
  ],
  exports: [
    StudentRepositry,
    MentoRepository,
    GradeRepository,
    TaskRepository,
    FinishedTaskRepository,
  ],
})
export class DatabaseModule {}
