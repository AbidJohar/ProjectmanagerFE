import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // or use '0.0.0.0' to make it accessible on your network
    port: 5173,
    hmr: {
      protocol: 'ws', // explicitly set WebSocket protocol
      host: 'localhost',
    },
  },
})
