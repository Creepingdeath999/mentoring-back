import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { FinishedTask } from 'src/common/dto'
import { IFinishedTasks } from 'src/common/interfaces'

@Injectable()
export class FinishedTaskRepository {
  constructor(
    @InjectModel('FinishedTask')
    private readonly finishedTaskModel: Model<IFinishedTasks>,
  ) {}

  add(finishedTask: FinishedTask) {
    return this.finishedTaskModel.create(finishedTask)
  }

  remove(finishedTask: FinishedTask) {
    return this.finishedTaskModel.deleteOne({ ...finishedTask })
  }
  find(finishedTask: FinishedTask) {
    return this.finishedTaskModel.find({ ...finishedTask })
  }
}
