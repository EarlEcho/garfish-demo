import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'http://127.0.0.1:3001',
  server: {
    port: 3001,
    cors: true,
    origin: 'http://127.0.0.1:3001'
  }
})
