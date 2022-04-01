import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
} from '@nestjs/common'
import { AddGrade, DeleteGrade } from 'src/common/dto'
import { GradeService } from './grade.service'

@Controller('grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Post()
  async add(@Body() grade: AddGrade) {
    try {
      const createdGrade = await this.gradeService.add(grade)
      return createdGrade
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Get()
  async getGrades() {
    try {
      const grades = await this.gradeService.getGrades()
      return grades
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
  @Delete()
  async deleteGrade(@Body() grade: DeleteGrade) {
    try {
      return await this.gradeService.deleteGrade(grade)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
