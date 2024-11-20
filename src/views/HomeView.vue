<script setup lang="ts">
import type { TaskModel } from '@/models/TaskModels/TaskModel';
import { useSessionStore } from '@/stores/AuthSessionStore';
import { useTasksStore } from '@/stores/TasksStore';
import { reactive } from 'vue';

const useAuthSessionStore = useSessionStore();
const useTaskStore = useTasksStore();
const tasks = reactive(useTaskStore);

tasks.getAllTasks();

const newtask: TaskModel = {
  id: 0,
  title: 'Editar esta tarea',
  state: false
}

function createNewTask() {
  useTaskStore.createNewTask(newtask);
}

function logout() {
  useAuthSessionStore.logout();
}

</script>

<template>
  <main>
    <header class="bg-neutral-700">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-2xl text-gray-50 sm:text-3xl">Lista de Tareas</h1>
          </div>

          <div class="flex items-center gap-4">
            <button
              class="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
              type="button" @click="createNewTask()">
              <span class="text-sm font-medium"> Agregar tarea </span>

              <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>

            <button
              class="inline-block rounded bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-500 focus:outline-none focus:ring"
              type="button" @click="logout()">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="grid grid-cols-1 gap-4 lg:grid-row-3 lg:gap-8 justify-center pt-16 lg:px-96 sm:px-24">
      <!-- Tareas incompletas -->
      <span class="flex items-center">
        <span class="pr-6 text-red-500">Tareas incompletas</span>
        <span class="h-px flex-1 bg-red-800"></span>
      </span>
      <div class="relative block overflow-hidden rounded-lg bg-gray-500 p-3 min-h-32">
        <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div class="rounded-lg ">
          <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead class="ltr:text-left rtl:text-right text-slate-50">
              <tr>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Id</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Titulo</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Estado</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="task in tasks.data">
                <td class="whitespace-nowrap pl-10 py-2 font-medium text-gray-900">{{ task.id }}</td>
                <td class="whitespace-nowrap pl-10 py-2 text-gray-700">{{ task.title }}</td>
                <td class="whitespace-nowrap pl-10 py-2 text-gray-700">{{ task.state }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Tareas completadas -->
      <span class="flex items-center">
        <span class="pr-6 text-green-500">Tareas completadas</span>
        <span class="h-px flex-1 bg-green-800"></span>
      </span>
      <div class="relative block overflow-hidden rounded-lg bg-gray-500 p-3 min-h-32">
        <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div class="rounded-lg ">
          <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead class="ltr:text-left rtl:text-right text-slate-50">
              <tr>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Id</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Titulo</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Estado</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="task in tasks.data">
                <td class="whitespace-nowrap pl-10 py-2 font-medium text-gray-900">{{ task.id }}</td>
                <td class="whitespace-nowrap pl-10 py-2 text-gray-700">{{ task.title }}</td>
                <td class="whitespace-nowrap pl-10 py-2 text-gray-700">{{ task.state }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Todas las tareas -->
      <span class="flex items-center">
        <span class="pr-6">Todas las tareas</span>
        <span class="h-px flex-1 bg-gray-200"></span>
      </span>
      <div class="relative block overflow-hidden rounded-lg bg-gray-500 p-3 min-h-32">
        <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div class="rounded-lg ">
          <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead class="ltr:text-left rtl:text-right text-slate-50">
              <tr>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Id</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Titulo</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Estado</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="task in tasks.data">
                <td class="whitespace-nowrap pl-10 py-2 font-medium text-gray-900">{{ task.id }}</td>
                <td class="whitespace-nowrap pl-10 py-2 text-gray-700">{{ task.title }}</td>
                <td class="whitespace-nowrap pl-10 py-2 text-gray-700">{{ task.state }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
