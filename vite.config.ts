import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_USER_NAME': JSON.stringify(process.env.REACT_APP_USER_NAME),
    'process.env.REACT_APP_USER_PASSWORD': JSON.stringify(process.env.REACT_APP_USER_PASSWORD),
  },
})
