import { Injectable } from '@nestjs/common'
import { AddGrade, DeleteGrade } from 'src/common/dto'
import { GradeRepository } from '../../database/repositories'

@Injectable()
export class GradeService {
  constructor(private readonly gradeRepository: GradeRepository) {}

  async add(grade: AddGrade) {
    const foundGrade = await this.gradeRepository.findOne(grade)

    if (foundGrade) {
      return this.gradeRepository.edit(grade)
    }

    return this.gradeRepository.add(grade)
  }

  async getGrades() {
    return this.gradeRepository.findAll()
  }

  async deleteGrade(grade: DeleteGrade) {
    return this.gradeRepository.delete(grade)
  }
}
