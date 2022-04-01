import { Schema } from 'mongoose'

export const MentorSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
  categories: Array,
})
