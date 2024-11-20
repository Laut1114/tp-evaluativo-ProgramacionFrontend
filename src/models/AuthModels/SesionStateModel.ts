import type { CredentialsModel } from './AuthModels/CredentialModel'

export interface SessionModel {
  user?: CredentialsModel
  crsfToken?: string
  jwtExpiresIn?: number
}

export interface SessionStateModel {
  loading: boolean
  data: SessionModel | null
  error: string
  page: string
}
