<script setup lang="ts">
import { reactive } from 'vue';
import { useSessionStore } from '@/stores/AuthSessionStore';
import Spinner from '../icons/Spinner.vue';

// Model
import type { CredentialsModel } from '@/models/AuthModels/CredentialModel';

const useAuthSessionStore = useSessionStore();
const auth = reactive(useAuthSessionStore);

const formData: CredentialsModel = {
  email: '',
  password: '',
}

async function register() {
  const credentials = formData;
  await auth.registerUser(credentials);
}

function changePage() {
  useSessionStore().pageSelect('login');
}

</script>

<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center ">
    <div class="relative h-64 w-full sm:h-96 lg:h-screen lg:w-2/6">
      <img alt=""
        src="https://plus.unsplash.com/premium_photo-1684330690174-d4086ca21245?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="absolute inset-0 h-full w-full object-cover" />
    </div>

    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-2/3 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-start">
        <h1 class="text-2xl font-bold sm:text-3xl">Hola, Bienvenido!</h1>

        <p class="mt-4 text-gray-500">
          Para poder crear tu nueva cuenta por favor ingresa tus datos
        </p>
      </div>

      <form @submit.prevent="register()" class="mx-auto mb-0 mt-8 max-w-lg space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="relative">
            <label for="UserRegisterName"
              class="relative block overflow-hidden rounded-lg border bg-white px-3 pt-3 focus-within:border-[#00bf7e] focus-within:ring-1 focus-within:ring-[#00bf7e]">
              <input type="text" id="UserRegisterName" placeholder="Nombre"
                class="peer h-10 w-full bg-transparent text-slate-800 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

              <span
                class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">Nombre
              </span>
            </label>

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303" />
              </svg>
            </span>
          </div>

          <div class="relative">
            <label for="UserRegisterLastName"
              class="relative block overflow-hidden rounded-lg border bg-white px-3 pt-3 focus-within:border-[#00bf7e] focus-within:ring-1 focus-within:ring-[#00bf7e]">
              <input type="text" id="UserRegisterLastName" placeholder="Apellido"
                class="peer h-10 w-full bg-transparent text-slate-800 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

              <span
                class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">Apellido
              </span>
            </label>

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z" />
              </svg>
            </span>
          </div>
        </div>

        <!-- Email -->
        <div>
          <div class="relative">
            <label for="UserRegisterEmail"
              class="relative block overflow-hidden rounded-lg border bg-white px-3 pt-3 focus-within:border-[#00bf7e] focus-within:ring-1 focus-within:ring-[#00bf7e]">
              <input type="email" v-model="formData.email" id="UserRegisterEmail" placeholder="Email"
                class="peer h-10 w-full bg-transparent text-slate-800 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

              <span
                class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">Email
              </span>
            </label>

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </span>
          </div>
        </div>

        <!-- Password -->
        <div>
          <div class="relative">
            <label for="UserRegisterPassword"
              class="relative block overflow-hidden rounded-lg border bg-white px-3 pt-3 focus-within:border-[#00bf7e] focus-within:ring-1 focus-within:ring-[#00bf7e]">
              <input type="password" v-model="formData.password" id="UserRegisterPassword" placeholder="Contraseña"
                class="peer h-10 w-full bg-transparent text-slate-800 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

              <span
                class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">Contraseña
              </span>
            </label>

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            Tenes una cuenta?
            <a class="underline" @click="changePage()">Iniciar Sesión</a>
          </p>

          <button type="submit">
            <a
              class="group relative inline-block overflow-hidden rounded-lg bg-[#00895a] text-sm font-medium px-8 py-3 focus:outline-none focus:ring">
              <span
                class="absolute inset-y-0 right-0 w-[5px] bg-green-500 transition-all group-hover:w-full group-active:bg-green-950"></span>

              <span v-show="!auth.loading"
                class="relative text-sm font-medium text-gray-700 transition-colors group-hover:text-white">
                Crear cuenta
              </span>

              <span v-show="auth.loading"
                class="relative text-sm font-medium text-gray-700 transition-colors group-hover:text-white">
                <Spinner />
              </span>
            </a>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
