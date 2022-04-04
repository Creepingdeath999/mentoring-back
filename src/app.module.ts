import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import config from './configuration/config'
import {
  FinishedTaskModule,
  GradeModule,
  MentorModule,
  StudentModule,
  TaskModule,
} from './core'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(config().database.uri),
    StudentModule,
    MentorModule,
    GradeModule,
    TaskModule,
    FinishedTaskModule,
  ],
})
export class AppModule {}
