import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { FinishedTaskModule } from '../finishedTasks/finishedTasks.module'
import { GradeController } from './grade.controller'
import { GradeService } from './grade.service'

@Module({
  imports: [DatabaseModule, FinishedTaskModule],
  providers: [GradeService],
  controllers: [GradeController],
})
export class GradeModule {}
