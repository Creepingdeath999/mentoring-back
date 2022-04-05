import { Injectable } from '@nestjs/common'
import { AddGrade, DeleteGrade } from 'src/common/dto'
import { GradeRepository } from '../../database/repositories'
import { FinishedTaskService } from '../finishedTasks/finishedTasks.service'

@Injectable()
export class GradeService {
  constructor(
    private readonly gradeRepository: GradeRepository,
    private readonly finishedTaskService: FinishedTaskService,
  ) {}

  async add(grade: AddGrade) {
    const foundGrade = await this.gradeRepository.findOne(grade)

    if (foundGrade) {
      return this.gradeRepository.edit(grade)
    }

    await this.finishedTaskService.add({
      student: grade.student,
      taskID: grade.taskId,
    })

    return this.gradeRepository.add(grade)
  }

  async getGrades() {
    return this.gradeRepository.findAll()
  }

  async deleteGrade(grade: DeleteGrade) {
    await this.finishedTaskService.remove({
      student: grade.student,
      taskID: grade.taskId,
    })
    return this.gradeRepository.delete(grade)
  }
}
