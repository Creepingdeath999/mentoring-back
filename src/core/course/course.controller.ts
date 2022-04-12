import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
} from '@nestjs/common'
import { Course } from 'src/common/dto'
import { CourseService } from './course.service'

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async create(@Body() course: Course) {
    try {
      const cretedCourse = await this.courseService.create(course)
      return cretedCourse
    } catch (error) {
      throw new BadRequestException(error.messsage)
    }
  }

  @Delete()
  async delete(@Body() course: Course) {
    try {
      return await this.courseService.deleteCourse(course)
    } catch (error) {
      throw new BadRequestException(error.messsage)
    }
  }

  @Get()
  async getCourses() {
    try {
      const courses = await this.courseService.findAll()
      return courses
    } catch (error) {
      throw new BadRequestException(error.messsage)
    }
  }
}
