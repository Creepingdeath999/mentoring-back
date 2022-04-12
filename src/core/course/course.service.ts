import { Injectable } from '@nestjs/common'
import { Course } from 'src/common/dto'
import { CourseRepository } from 'src/database/repositories'

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async findCourse(course: Course) {
    return this.courseRepository.find(course)
  }

  async findAll() {
    return this.courseRepository.findAll()
  }

  async create(course: Course) {
    const existingCourse = await this.courseRepository.find(course)
    if (existingCourse) {
      return this.courseRepository.edit(course)
    }
    return this.courseRepository.crete(course)
  }

  async deleteCourse(course: Course) {
    return this.courseRepository.delete(course)
  }
}
