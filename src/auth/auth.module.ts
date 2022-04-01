import { forwardRef, Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { MentorModule } from 'src/core/mentor/mentor.module'
import { StudentModule } from 'src/core/student/student.module'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import config from 'src/configuration/config'
import { Encrypt } from 'src/utils/ecnrypt'
import { JwtStrategy, LocalStrategy } from './strategies'
import { JwtAuthGuard, LocalAuthGuard } from './guards'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({ secret: config().authorization.secret }),
    forwardRef(() => StudentModule),
    forwardRef(() => MentorModule),
  ],
  providers: [
    AuthService,
    Encrypt,
    JwtStrategy,
    LocalStrategy,
    LocalAuthGuard,
    JwtAuthGuard,
  ],
  exports: [AuthService],
})
export class AuthModule {}
