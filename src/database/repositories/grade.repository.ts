import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { AddGrade, DeleteGrade, EditGrade, GetGrade } from 'src/common/dto'
import { IGrade } from 'src/common/interfaces'
@Injectable()
export class GradeRepository {
  constructor(
    @InjectModel('Grade') private readonly gradeModel: Model<IGrade>,
  ) {}

  add(grade: AddGrade) {
    return this.gradeModel.create(grade)
  }

  findOne(grade: Partial<GetGrade>) {
    const { grade: gr, ...params } = grade
    return this.gradeModel.findOne({ ...params })
  }
  findAll() {
    return this.gradeModel.find()
  }

  edit(grade: EditGrade) {
    const { grade: gr, ...params } = grade
    return this.gradeModel.findOneAndUpdate(
      { ...params },
      { grade: gr },
      { new: true },
    )
  }

  delete(grade: DeleteGrade) {
    return this.gradeModel.deleteOne({ ...grade })
  }
}
