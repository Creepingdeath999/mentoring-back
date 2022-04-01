import { Schema } from 'mongoose'

export const StudentSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  mentorEmail: String,
  password: String,
  grade: { type: Number, default: 0 },
})
