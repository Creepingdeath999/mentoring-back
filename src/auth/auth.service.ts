import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import config from 'src/configuration/config'
import { MentorService } from 'src/core/mentor/mentor.service'
import { StudentService } from 'src/core/student/student.service'
import { Encrypt } from 'src/utils/ecnrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly ecnryptService: Encrypt,
    private readonly studentService: StudentService,
    private readonly mentorService: MentorService,
  ) {}

  private async checkRole(email: string) {
    const isStudent = await this.studentService.findOne(email)
    const isMentor = await this.mentorService.findOne(email)
    return isMentor || isStudent || null
  }

  async validate(email: string, password: string) {
    const user = await this.checkRole(email)
    if (!user) return

    const isPasswordValid = await this.ecnryptService.comparePasswords(
      password,
      user.password,
    )

    if (!isPasswordValid) return

    const payload = {
      email: user.email,
    }

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '24h',
      secret: config().authorization.secret,
    })
    return { token, user: { email: user.email } }
  }
}
