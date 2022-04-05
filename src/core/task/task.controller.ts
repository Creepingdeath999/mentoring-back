import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Query,
} from '@nestjs/common'
import { AddTask } from 'src/common/dto'
import { TaskService } from './task.service'

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async add(task: AddTask) {
    try {
      const createdTask = await this.taskService.add(task)
      return createdTask
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Get('categories')
  async getCategories() {
    try {
      const categories = await this.taskService.getCategories()
      return categories
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Get()
  async getTasks(@Query('category') category: string) {
    try {
      const tasks = await this.taskService.getTasks(category)
      return tasks
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Get('task')
  async getTask(
    @Query('title') title: string,
    @Query('category') category: string,
  ) {
    try {
      const task = await this.taskService.getOneTask(title, category)
      return task
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
