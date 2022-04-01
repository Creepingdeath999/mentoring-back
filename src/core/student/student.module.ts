import { forwardRef, Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { Encrypt } from 'src/utils/ecnrypt'
import { StudentService } from './student.service'
import { StudentController } from './student.controller'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  providers: [StudentService, Encrypt],
  controllers: [StudentController],
  exports:[StudentService]
})
export class StudentModule {}
