import { Government } from './government'

export interface GovernmentListResponse {
  next: string | null
  prev: string | null
  results: Government[]
}
