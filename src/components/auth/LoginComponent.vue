<script setup lang="ts">
import { reactive } from 'vue';
import { useSessionStore } from '@/stores/AuthSessionStore';
import Spinner from '../icons/Spinner.vue';

import type { CredentialsModel } from '@/models/AuthModels/CredentialModel';

const useAuthSessionStore = useSessionStore();
const auth = reactive(useAuthSessionStore);

const formData: CredentialsModel = {
  email: '',
  password: '',
}

auth.changeCrsfToken();

async function userLogin() {
  await auth.login(formData);
}

async function changePage() {
  useSessionStore().pageSelect('register');
}

</script>

<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center ">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-2/3 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-start">
        <h1 class="text-2xl font-bold sm:text-3xl">Ingresar a tu cuenta</h1>

        <p class="mt-4 text-gray-500">
          Para poder continuar debe iniciar sesión
        </p>
      </div>

      <form @submit.prevent="userLogin()" class="mx-auto mb-0 mt-8 max-w-lg space-y-4">
        <div>
          <div class="relative">
            <label for="UserEmail"
              class="relative block overflow-hidden rounded-lg border bg-white px-3 pt-3 focus-within:border-[#00bf7e] focus-within:ring-1 focus-within:ring-[#00bf7e]">
              <input type="email" v-model="formData.email" id="UserEmail" placeholder="Email"
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

        <div>
          <div class="relative">
            <label for="UserPassword"
              class="relative block overflow-hidden rounded-lg border bg-white px-3 pt-3 focus-within:border-[#00bf7e] focus-within:ring-1 focus-within:ring-[#00bf7e]">
              <input type="password" v-model="formData.password" id="UserPassword" placeholder="Contraseña"
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
            No tenes una cuenta?
            <a class="underline" @click="changePage()">Registrate</a>
          </p>

          <button type="submit">
            <a
              class="group relative inline-block overflow-hidden rounded-lg bg-[#00895a] text-sm font-medium px-8 py-3 focus:outline-none focus:ring">
              <span
                class="absolute inset-y-0 left-0 w-[5px] bg-green-500 transition-all group-hover:w-full group-active:bg-green-950"></span>

              <span v-show="!auth.loading"
                class="relative text-sm font-medium text-gray-700 transition-colors group-hover:text-white">
                Ingresar
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

    <div class="relative h-64 w-full sm:h-96 lg:h-screen lg:w-2/6">
      <img alt=""
        src="https://images.unsplash.com/photo-1589308800645-4107ddfd5f08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRhc2t8ZW58MHx8MHx8fDA%3D"
        class="absolute inset-0 h-full w-full object-cover" />
    </div>
  </section>
</template>

<style scoped></style>
