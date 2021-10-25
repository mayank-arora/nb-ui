import { axios } from './use-axios'

export type Session = {
  user: {
    active: boolean
    contact: object
    email: {
      email: string
      verified: boolean
    }
    id: number
    name: string
    profilePic: string
    status: string
  }
}
// import { useQuery } from 'react-query'

export async function useGetSession() {
  const { data } = await axios.get<Session>(`/api/v1/session`)
  return data
}
