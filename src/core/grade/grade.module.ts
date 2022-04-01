import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { GradeController } from './grade.controller'
import { GradeService } from './grade.service'

@Module({
  imports: [DatabaseModule],
  providers: [GradeService],
  controllers: [GradeController],
})
export class GradeModule {}
