import { Schema } from 'mongoose'

export const TaskSchema = new Schema({
  title: String,
  body: String,
  imageUrl: String,
  category: String,
})
