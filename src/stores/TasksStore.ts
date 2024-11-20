import { defineStore } from 'pinia'
import router from '@/router'

// IMPORTS MODELS
import type { TaskModel, TaskDataModel, TaskStateModel } from '@/models/TaskModels/TaskModel'

// IMPORTS API
import { API } from '@/services'
import type { CreateTaskModel } from '@/models/TaskModels/TaskReqModel'

export const useTasksStore = defineStore('tasks', {
  state: (): TaskStateModel => ({
    loading: false,
    data: [],
    done: [],
    pending: [],
    all: [],
  }),
  actions: {
    async getAllTasks() {
      this.loading = true
      console.info('[Task Store 💾] Intentando obtener todas las tareas')

      try {
        const res = await API.GetTasks()

        if (res.status === 200) {
          res.data.forEach((t) => {
            let task: TaskModel = {
              id: t.id!,
              title: t.title!,
              state: t.description === 'Complete' ? true : false,
            }

            this.data.push(task)
            this.all.push(task)
          })

          this.done = this.data.filter((t) => t.state)
          this.pending = this.data.filter((t) => !t.state)
          this.loading = false
          console.info('[API 🌐] Tareas obtenidas correctamente')
        }
      } catch (e) {
        this.loading = false
        console.error('[API 🌐] Error Obteniendo las tarea', e)
      }
    },

    async createNewTask(task: TaskModel) {
      this.loading = true
      console.info('[Task Store 💾] Intentando crear una nueva tarea')

      console.log(task)
      try {
        const dataTask: CreateTaskModel = {
          title: task.title,
          description: task.state ? 'Complete' : 'Incomplete',
        }

        const res = await API.CreateTask(dataTask)

        if (res.status === 200) {
          let taskId = res.data.id! // Id de la tarea asignado por la API
          let newTask = { ...task, id: taskId }
          this.data.push(newTask)
          this.loading = false
          console.info('[API 🌐] Tarea creada correctamente')

          await this.getAllTasks()
        }
      } catch (e) {
        this.loading = false
        console.error('[API 🌐] Error al crear la tarea', e)
      }
    },

    async updateTask(task: TaskModel) {
      this.loading = true
      const id = this.data.findIndex((i) => i.id === task.id)

      console.info('[Task Store 💾] Intentando actualizar la tarea')
      try {
        const res = await API.UpdateTask(id, {
          title: this.data[id].title,
          description: this.data[id].state ? 'Complete' : 'Incomplete',
        })

        if (res.status === 200) {
          this.loading = false
          console.info('[API 🌐] Tarea con id: ', res.data.id, ' actualizada correctamente')
        }
      } catch (e) {
        this.loading = false
        console.error('[API 🌐] Error al actualizar la tarea', e)
      }
    },

    async deleteTask(task: TaskModel) {
      this.loading = true
      console.info('[Task Store 💾] Intentando eliminar la tarea con id: ', task.id)
      try {
        const res = await API.DeleteTask(task.id)
        if (res.status === 200) {
          const index1 = this.data.findIndex((i) => i.id === task.id)
          this.data.splice(index1, 1)
          const index2 = this.all.findIndex((i) => i.id === task.id)
          this.all.splice(index2, 1)
          this.loading = false
          console.info('[API 🌐] Tarea con id: ', task.id, ' eliminada correctamente')
        }
      } catch (e) {
        this.loading = false
        console.error('[API 🌐] Error al eliminar la tarea', e)
      }

      await this.getAllTasks()
    },
  },
})
