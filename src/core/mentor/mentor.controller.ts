import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Put,
  Param,
  Get,
  Delete,
} from '@nestjs/common'
import { LocalAuthGuard } from 'src/auth/guards'
import { AddMentor, EditMentor, FindMentor } from 'src/common/dto'
import { MentorService } from './mentor.service'

@Controller('mentor')
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}
  @Get()
  async findAll(@Body() findMentorParams?: FindMentor) {
    try {
      const mentors = await this.mentorService.findAll(findMentorParams)
      return mentors
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
  @Post()
  async crete(@Body() mentor: AddMentor) {
    try {
      const createdMentor = await this.mentorService.crete(mentor)
      return createdMentor
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
  @Put(':email')
  async edit(
    @Param('email') email: string,
    @Body() editedProperties: EditMentor,
  ) {
    try {
      const editedMentor = await this.mentorService.edit(
        email,
        editedProperties,
      )
      return editedMentor
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return req.user
  }

  @Delete(':email')
  async delete(@Param('email') email: string) {
    try {
      return await this.mentorService.delete(email)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
