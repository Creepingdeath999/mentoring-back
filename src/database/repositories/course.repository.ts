import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { ICourse } from 'src/common/interfaces'
import { Course } from 'src/common/dto'

@Injectable()
export class CourseRepository {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<ICourse>,
  ) {}
  findAll() {
    return this.courseModel.find()
  }

  find(course: Course) {
    return this.courseModel.findOne({ ...course })
  }
  crete(course: Course) {
    return this.courseModel.create(course)
  }

  edit(course: Course) {
    return this.courseModel.findOneAndUpdate({ ...course }, { ...course })
  }

  delete(course: Course) {
    return this.courseModel.deleteOne({ ...course })
  }
}
