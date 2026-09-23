import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function spaFallbackPlugin() {
  return {
    name: 'spa-fallback-generator',
    closeBundle() {
      try {
        const distDir = path.resolve(__dirname, 'dist');
        const indexPath = path.join(distDir, 'index.html');
        if (!fs.existsSync(indexPath)) return;

        const routes = ['drandrearaujo', 'dr-andre-araujo', 'drandre', 'sobre', 'tratamentos', 'contato'];
        for (const route of routes) {
          const routeDir = path.join(distDir, route);
          if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
          }
          fs.copyFileSync(indexPath, path.join(routeDir, 'index.html'));
        }
        // Fallback 404.html para servidores estáticos (GitHub Pages, S3, Firebase)
        fs.copyFileSync(indexPath, path.join(distDir, '404.html'));
      } catch (err) {
        console.warn('spaFallbackPlugin warning:', err);
      }
    }
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), spaFallbackPlugin()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
