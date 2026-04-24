import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Repo name on GitHub. Must match so assets resolve under
  // https://<user>.github.io/Bet-App/
  base: '/Bet-App/',
  plugins: [react()],
})
