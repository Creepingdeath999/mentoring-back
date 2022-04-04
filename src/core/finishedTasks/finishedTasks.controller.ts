import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { FinishedTask } from 'src/common/dto'
import { FinishedTaskService } from './finishedTasks.service'

@Controller('finished')
export class FinishedTaskConroller {
  constructor(private readonly finishedTaskService: FinishedTaskService) {}

  @Post()
  async add(@Body() finishedTask: FinishedTask) {
    try {
      const finished = await this.finishedTaskService.add(finishedTask)
      return finished
    } catch (error) {
      throw new BadRequestException(error.messsage)
    }
  }
}
