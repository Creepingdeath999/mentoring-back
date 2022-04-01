import { Schema } from 'mongoose'

export const FinishedTasksSchema = new Schema({
  student: String,
  taskID: String,
})
