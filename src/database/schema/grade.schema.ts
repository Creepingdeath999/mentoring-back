import { Schema } from 'mongoose'

export const GradeSchema = new Schema({
  grade: Number,
  mentor: String,
  student: String,
  taskId: String,
})
