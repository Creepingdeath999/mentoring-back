import { Injectable } from '@nestjs/common'
import { CreateStudent, EditStudent } from 'src/common/dto'
import { IGetStudents } from 'src/common/interfaces'
import { StudentRepositry } from 'src/database/repositories'
import { Encrypt } from 'src/utils/ecnrypt'

@Injectable()
export class StudentService {
  constructor(
    private readonly studentRespoitory: StudentRepositry,
    private readonly ecnryptService: Encrypt,
  ) {}

  async findOne(email: string) {
    const foundStudent = await this.studentRespoitory.findOne(email)
    return foundStudent
  }

  async findAll(params: IGetStudents) {
    return this.studentRespoitory.findAll(params)
  }

  async create(student: CreateStudent) {
    const password = await this.ecnryptService.encryptPassword(student.password)
    if (await this.findOne(student.email)) {
      throw new Error('student already exists with email')
    }
    return this.studentRespoitory.create({ ...student, password })
  }

  async edit(email: string, editedProperties: EditStudent) {
    const student = await this.findOne(email)

    if (!student) {
      throw new Error('user does not exist')
    }

    if (editedProperties.password) {
      const password = await this.ecnryptService.encryptPassword(
        editedProperties.password,
      )
      editedProperties.password = password
    }

    return this.studentRespoitory.edit(email, editedProperties)
  }

  async delete(email: string) {
    if (!(await this.findOne(email))) {
      throw new Error('student does not exist')
    }

    return this.studentRespoitory.delete(email)
  }
}
