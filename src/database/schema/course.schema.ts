import { Schema } from 'mongoose'

export const CourseSchema = new Schema({
  title: String,
  description: String,
  category: String,
})
