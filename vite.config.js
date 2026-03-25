import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/learn-webdev/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // to wyciszy ewentualne ostrzeżenia Sassa
      }
    }
  }
})
