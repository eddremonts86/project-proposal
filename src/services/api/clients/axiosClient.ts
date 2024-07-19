import { appConfig } from '@/appConfig'
import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: appConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
