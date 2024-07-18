import axios from 'axios'
import { appConfig } from '@/appConfig'

export const axiosClient = axios.create({
  baseURL: appConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
