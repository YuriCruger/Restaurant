import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      homepage: "/public/assets/homepage",
      images: "/public/images",
      components: "/src/components",
      booking: "/src/components/booking",
    },
  },
})
