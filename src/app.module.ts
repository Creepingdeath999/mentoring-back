import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import config from './configuration/config'
import { GradeModule } from './core/grade/grade.module'
import { MentorModule } from './core/mentor/mentor.module'
import { StudentModule } from './core/student/student.module'
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(config().database.uri),
    StudentModule,
    MentorModule,
    GradeModule,
  ],
})
export class AppModule {}
