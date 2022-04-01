import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateStudent, EditStudent } from '../../common/dto'
import { IGetStudents, IStudent } from '../../common/interfaces'

@Injectable()
export class StudentRepositry {
  constructor(
    @InjectModel('Student') private readonly StudentModel: Model<IStudent>,
  ) {}

  async create(student: CreateStudent): Promise<IStudent> {
    return this.StudentModel.create(student)
  }

  async findOne(email: string): Promise<IStudent> {
    return this.StudentModel.findOne({ email })
  }

  async findAll({ limit, skip, mentorEmail }: IGetStudents) {
    return this.StudentModel.find(mentorEmail ? { mentorEmail } : null)
      .skip(skip)
      .limit(limit)
  }

  async edit(email: string, editedProperties: EditStudent) {
    return this.StudentModel.findOneAndUpdate(
      { email },
      { ...editedProperties },
    )
  }
  async delete(email: string) {
    return this.StudentModel.deleteOne({ email })
  }
}
