import { apiInstance } from '../api'

import type { TaskApiResModel } from '@/models/TaskModels/TaskApiResModel'
import type { CreateTaskModel } from '@/models/TaskModels/TaskReqModel'

export async function GetTasks() {
  return await apiInstance.get<TaskApiResModel[]>('/todo')
}

export async function GetTaskId(id: number) {
  return await apiInstance.get<TaskApiResModel>(`/todo/${id}`)
}

export async function CreateTask(task: CreateTaskModel) {
  return await apiInstance.post<TaskApiResModel>('/todo', task)
}

export async function UpdateTask(id: number, task: CreateTaskModel) {
  return await apiInstance.patch<TaskApiResModel>(`/todo/${id}`, task)
}

export async function DeleteTask(id: number) {
  return await apiInstance.delete(`/todo/${id}`)
}
