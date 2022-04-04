import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { FinishedTaskService } from './finishedTasks.service'

@Module({
  imports: [DatabaseModule],
  providers: [FinishedTaskService],
  exports: [FinishedTaskService],
})
export class FinishedTaskModule {}
