import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  // 如果需要部署到GitHub Pages，取消注释并修改base路径
  // base: '/sinmm/',

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
})
