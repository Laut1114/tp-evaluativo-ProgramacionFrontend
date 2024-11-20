import { defineStore } from 'pinia'
import router from '@/router'

// IMPORTS MODELS
import type { CredentialsModel } from '@/models/AuthModels/CredentialModel'
import type { SessionStateModel } from '@/models/AuthModels/SesionStateModel'

// IMPORTS API
import { apiInstance } from '@/services/api'
import { API } from '@/services'

export const useSessionStore = defineStore('session', {
  state: (): SessionStateModel => ({
    loading: false,
    data: {
      user: undefined,
      crsfToken: undefined,
      jwtExpiresIn: undefined,
    },
    error: '',
    page: 'login',
  }),
  actions: {
    changeCrsfToken() {
      const headers = apiInstance.defaults.headers
      this.data!.crsfToken = headers['csrf-token']?.toString()
      console.info('[Sesion Store 🔑] CRSF Token Actualizado')
    },

    async registerUser(userData: CredentialsModel) {
      this.loading = true
      try {
        const res = await API.SignUp(userData)
        if (res.status === 201) {
          this.data!.user = userData
          console.info('[AUTH-API 🔑] Usuario Creado, codigo de respuesta: ' + res.status)
          this.login(userData)
          this.page = 'login'
          this.loading = false
        }
      } catch (e) {
        this.loading = false
        console.error('[AUTH-API 🔑] Error al registrar usuario', e)
        this.error = e!.toString()
      }
    },

    async login(userData: CredentialsModel) {
      this.loading = true

      try {
        const res = await API.SignIn(userData)

        if (res.status === 200) {
          this.data!.user = userData
          this.data!.jwtExpiresIn = Math.floor(Date.now() / 1000) + 3 * 60
          console.info('[AUTH-API 🔑] Usuario Logeado, codigo de respuesta: ' + res.status)
          this.renwalToken()
          this.loading = false
          router.push('/home')
        }
      } catch (e) {
        this.loading = false
        console.error('[AUTH-API 🔑] Error al iniciar sesión', e)
        this.error = e!.toString()
      }
    },

    async logout() {
      this.loading = true
      this.data!.user = undefined
      this.data!.jwtExpiresIn = undefined

      try {
        const r = await API.LogOut()

        if (r.status === 200) {
          console.info('[AUTH-API 🔑] Usuario Desconectado, codigo de respuesta: ' + r.status)
          this.loading = false
          router.push({ name: 'login' })
        }
      } catch (e) {
        console.error('[AUTH-API 🔑] Error al desconectar el usuario', e)
        this.loading = false
        this.error = e!.toString()
      }
    },

    async renwalToken() {
      console.info('[Sesion Store 🔑] Renovando el token en 3 min')

      setTimeout(
        async () => {
          try {
            const r = await API.SignIn(this.data!.user!)

            if (r.status === 200) {
              this.data!.jwtExpiresIn = Math.floor(Date.now() / 1000) + 3 * 60
              console.info('[AUTH-API 🔑] Token Renovado')
            }
          } catch (e) {
            console.error('[AUTH-API 🔑] Error al obtener el token', e)
            this.error = e!.toString()
          }
        },
        3 * 60 * 1000,
      )

      setTimeout(
        () => {
          this.renwalToken()
        },
        3 * 60 * 1000,
      )
    },

    pageSelect(page: string) {
      this.page = page
    },
  },
})
