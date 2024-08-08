export const appConfig = {
  BASE_URL: import.meta.env.BASE_URL,
  APP_URL: import.meta.env.VITE_APP_URL ?? 'http://localhost:3000',
  API_URL: import.meta.env.VITE_API_SERVER ?? 'http://localhost:3001',
}
