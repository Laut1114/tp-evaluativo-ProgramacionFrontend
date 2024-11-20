import { apiInstance } from '../api'

import type { CredentialsModel } from '@/models/AuthModels/CredentialModel'
import type { ApiResponseModel } from '@/models/ApiResponseModel'
import type { AuthApiResModel } from '@/models/AuthModels/AuthApiResModel'

export async function SignUp(userData: CredentialsModel) {
  return await apiInstance.post<ApiResponseModel<AuthApiResModel>>('auth/signup', userData)
}

export async function SignIn(credentials: CredentialsModel) {
  const response = await apiInstance.post<ApiResponseModel<AuthApiResModel>>(
    '/auth/login',
    credentials,
    {
      withCredentials: true,
    },
  )
  return response
}

export const LogOut = async () => {
  return await apiInstance.post('/auth/logout')
}
