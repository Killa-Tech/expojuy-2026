import { fileURLToPath, URL } from 'node:url'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { qrcode } from 'vite-plugin-qrcode'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    qrcode(),
  ],
  build: {
    // Three.js and MapLibre are intentionally isolated lazy vendors.
    // Their minified size is intrinsic to the libraries, not the initial bundle.
    chunkSizeWarningLimit: 1100,
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three/")) {
            return "three-core";
          }
          if (id.includes("node_modules/@react-three/fiber")) {
            return "react-three-fiber";
          }
          if (id.includes("node_modules/@react-three/drei")) {
            return "react-three-drei";
          }
          if (id.includes("node_modules/maplibre-gl/")) {
            return "maplibre";
          }
          return undefined;
        },
      },
    },
  },
})
