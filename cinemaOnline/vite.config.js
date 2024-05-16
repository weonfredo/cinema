import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


// vite.config.js
// export default {
//   server: {
//     port: 5173, // puerto de desarrollo de Vite
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8080', // URL de tu backend
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// }


export default defineConfig({
  plugins: [react()],
})

