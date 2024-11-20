export interface TaskModel {
  id: number
  title: string
  state: boolean
}

export interface TaskDataModel {
  loading: boolean
  data: TaskModel[]
}

export interface TaskStateModel extends TaskDataModel {
  done: TaskModel[]
  pending: TaskModel[]
  all: TaskModel[]
}
