import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { AddTask, DeleteTask, EditTask } from 'src/common/dto'
import { ITask } from 'src/common/interfaces'
@Injectable()
export class TaskRepository {
  constructor(@InjectModel('Task') private readonly taskModel: Model<ITask>) {}

  add(task: AddTask) {
    return this.taskModel.create(task)
  }

  edit(task: EditTask) {
    return this.taskModel.findOneAndUpdate({ ...task }, { ...task })
  }

  delete(task: DeleteTask) {
    return this.taskModel.deleteOne({ ...task })
  }

  getTasks(category?: string) {
    return this.taskModel.find({ category })
  }

  getOneTask(title: string, category: string) {
    return this.taskModel.findOne({ title, category })
  }
}
