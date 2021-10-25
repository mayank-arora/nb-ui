import Axios from 'axios'

const token = typeof Storage !== 'undefined' ? localStorage.getItem('token') : 0
const team = typeof Storage !== 'undefined' ? localStorage.getItem('team') : 0

export const axios = Axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
    'x-nb-teamid': team,
  },
})
