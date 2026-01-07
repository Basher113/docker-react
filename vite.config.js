import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true, // This allows the server to be accessible externally from the container
    port: 5173,  // You can change this to your desired container port
    watch: {
      usePolling: true,
      },
    }
})
