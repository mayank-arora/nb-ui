import { useQuery } from 'react-query'
import { axios } from './use-axios'

type Setting = {
  teamId: number
  settingType:
    | 'ACADEMY'
    | 'CHECKLIST'
    | 'CHECKLIST_WHITELIST'
    | 'ACADEMY_WHITELIST'
    | 'TRAINING'
  value: any
}
type Settings = Array<Setting>

export function useGetConfig(team: string, userId?: number) {
  return useQuery(['config'], async () => {
    const { data } = await axios.get<Settings>(
      `/api/v2/team/${team}/remote-config`,
      {
        headers: { 'X-Nb-UserId': userId },
      }
    )
    return data
  }, {
    enabled: !!userId,
  })
}
