import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
export default defineConfig({
  root: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, 'src/index.html'),
    }
  }
  // build: {
  //   outDir,
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     input: {
  //       main: resolve(root, 'index.html')
  //     }
  //   }
  // }
})
