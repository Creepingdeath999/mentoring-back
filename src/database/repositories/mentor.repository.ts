import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { AddMentor, EditMentor, FindMentor } from '../../common/dto'
import { IMentor } from '../../common/interfaces'
@Injectable()
export class MentoRepository {
  constructor(
    @InjectModel('Mentor') private readonly MentorModel: Model<IMentor>,
  ) {}

  async findAll({ limit, skip }: FindMentor) {
    return this.MentorModel.find().skip(skip).limit(limit)
  }
  async create(mentor: AddMentor): Promise<IMentor> {
    return this.MentorModel.create(mentor)
  }

  async findOne(email: string): Promise<IMentor> {
    return this.MentorModel.findOne({ email })
  }

  //this needs to be fixed
  async edit(email: string, editedProperties: EditMentor) {
    return this.MentorModel.findOneAndUpdate({ email }, { ...editedProperties })
  }
  async delete(email: string) {
    return this.MentorModel.deleteOne({ email })
  }
}
