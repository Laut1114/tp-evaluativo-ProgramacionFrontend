type TaskComplete = 'Complete' | 'Incomplete'

export interface CreateTaskModel {
  title: string
  description: TaskComplete
}
