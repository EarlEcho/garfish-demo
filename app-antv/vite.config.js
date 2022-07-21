import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'http://127.0.0.1:3002',
  server: {
    port: 3002,
    cors: true,
    origin: 'http://127.0.0.1:3002'
  }
})
