import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const apiToken = process.env.TOKEN

export const authApi = axios.create({
  baseURL: 'http://localhost:8000/login',
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
})

export const movieApi = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4',
  headers: {
    accept: 'application/json',
    'X-API-KEY': 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M',
  },
})
