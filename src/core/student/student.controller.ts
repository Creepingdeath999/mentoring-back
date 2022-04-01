import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common'
import { LocalAuthGuard } from 'src/auth/guards'
import { CreateStudent, EditStudent } from 'src/common/dto'
import { IGetStudents } from 'src/common/interfaces'
import { StudentService } from './student.service'

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async findAll(@Query() params: IGetStudents) {
    try {
      const studens = await this.studentService.findAll(params)
      return studens
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

  @Get(':email')
  async findOne(@Param('email') email: string) {
    try {
      const student = await this.studentService.findOne(email)
      return student
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }
  @Post()
  async create(@Body() student: CreateStudent) {
    try {
      const createdStudent = await this.studentService.create(student)
      return createdStudent
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

  @Delete(':email')
  async delete(@Param('email') email: string) {
    try {
      return await this.studentService.delete(email)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

  @Post('/login')
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  async login(@Request() req): Promise<string> {
    return req.user
  }

  @Put(':email')
  async edit(
    @Param('email') email: string,
    @Body() editedProperties: EditStudent,
  ) {
    try {
      const editedStudent = await this.studentService.edit(
        email,
        editedProperties,
      )
      return editedStudent
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }
}
