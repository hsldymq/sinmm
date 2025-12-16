import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  // 开发环境用根路径，生产环境用 /sinmm/
  base: command === 'build' ? '/sinmm/' : '/',

  build: {
    // 生成 sourcemap 用于调试
    sourcemap: false,
    
    // 优化构建
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue'],
        },
      },
    },
  },

  server: {
    port: 5173,
    open: false,
  },
}))
