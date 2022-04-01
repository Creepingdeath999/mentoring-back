import { Injectable } from '@nestjs/common'
import { AddTask, DeleteTask, EditTask } from 'src/common/dto'
import { TaskRepository } from 'src/database/repositories'

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async add(task: AddTask) {
    const foundTask = await this.taskRepository.getOneTask(
      task.title,
      task.category,
    )
    if (foundTask) {
      throw new Error('task already exists with this title in category')
    }

    return this.taskRepository.add(task)
  }

  async getOneTask(title: string, category: string) {
    this.taskRepository.getOneTask(title, category)
  }

  async getTasks(category?: string) {
    return this.taskRepository.getTasks(category)
  }

  async editTask(task: EditTask) {
    const isTask = await this.taskRepository.getOneTask(
      task.title,
      task.category,
    )

    if (!isTask) {
      throw new Error('task does not exists')
    }

    return this.taskRepository.edit(task)
  }

  async deleteTask(task: DeleteTask) {
    return this.taskRepository.delete(task)
  }
}
