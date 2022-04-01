import { forwardRef, Module } from '@nestjs/common'
import { AuthModule } from 'src/auth/auth.module'
import { DatabaseModule } from 'src/database/database.module'
import { Encrypt } from 'src/utils/ecnrypt'
import { MentorController } from './mentor.controller'
import { MentorService } from './mentor.service'

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  providers: [MentorService, Encrypt],
  controllers: [MentorController],
  exports: [MentorService],
})
export class MentorModule {}
