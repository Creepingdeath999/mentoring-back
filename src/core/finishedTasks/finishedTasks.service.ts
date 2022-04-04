import { Injectable } from '@nestjs/common'
import { FinishedTask } from 'src/common/dto'
import { FinishedTaskRepository } from 'src/database/repositories/finished.repository'

@Injectable()
export class FinishedTaskService {
  constructor(
    private readonly finishedTaskRepository: FinishedTaskRepository,
  ) {}

  async add(finishedTask: FinishedTask) {
    const finished = await this.finishedTaskRepository.find(finishedTask)

    if (finished) {
      return this.finishedTaskRepository.remove(finishedTask)
    }

    return this.finishedTaskRepository.add(finishedTask)
  }
}
