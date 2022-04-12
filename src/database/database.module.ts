import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
  StudentRepositry,
  MentoRepository,
  GradeRepository,
  TaskRepository,
  CourseRepository,
} from './repositories'
import { FinishedTaskRepository } from './repositories/finished.repository'
import {
  CourseSchema,
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
      { name: 'Course', schema: CourseSchema },
    ]),
  ],
  providers: [
    StudentRepositry,
    MentoRepository,
    GradeRepository,
    TaskRepository,
    FinishedTaskRepository,
    CourseRepository,
  ],
  exports: [
    StudentRepositry,
    MentoRepository,
    GradeRepository,
    TaskRepository,
    FinishedTaskRepository,
    CourseRepository,
  ],
})
export class DatabaseModule {}
