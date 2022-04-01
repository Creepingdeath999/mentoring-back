import { Injectable } from '@nestjs/common'
import { AddMentor, EditMentor, FindMentor } from 'src/common/dto'
import { MentoRepository } from 'src/database/repositories/mentor.repository'
import { Encrypt } from 'src/utils/ecnrypt'

@Injectable()
export class MentorService {
  constructor(
    private readonly mentorRepository: MentoRepository,
    private readonly ecnryptService: Encrypt,
  ) {}

  async findAll(findMentorParams?: FindMentor) {
    const mentors = await this.mentorRepository.findAll(findMentorParams)

    if (findMentorParams.categories) {
      if (findMentorParams.categories.length < 1) return mentors
      const filteredMentors = mentors.filter((mentor) =>
        mentor.categories.some((category) =>
          findMentorParams.categories.includes(category),
        ),
      )
      return filteredMentors
    }

    return mentors
  }

  async findOne(email: string) {
    return this.mentorRepository.findOne(email)
  }

  async crete(mentor: AddMentor) {
    const mentorExists = await this.findOne(mentor.email)
    if (mentorExists) {
      throw new Error('mentor already exists')
    }
    const password = await this.ecnryptService.encryptPassword(mentor.password)

    return this.mentorRepository.create({ ...mentor, password })
  }

  async edit(email: string, editedProperties: EditMentor) {
    const mentor = await this.findOne(email)

    if (!mentor) {
      throw new Error('mentor does not exist with email')
    }

    if (editedProperties.password) {
      const password = await this.ecnryptService.encryptPassword(
        editedProperties.password,
      )
      editedProperties.password = password
    }

    // if (editedProperties.categories) {
    //   const differentCategories = editedProperties.categories.filter(
    //     (category) => !mentor.categories.includes(category),
    //   )

    //   editedProperties.categories = [...differentCategories]
    // }
    return this.mentorRepository.edit(email, editedProperties)
  }

  async delete(email: string) {
    const mentor = await this.findOne(email)
    if (!mentor) {
      throw new Error('user does not exist')
    }
    return this.mentorRepository.delete(email)
  }
}
