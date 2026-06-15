import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function serveExistingStaticFile(req, res, next) {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const allowedPrefixes = ['/html/', '/css/', '/js/'];
  const allowedRootFiles = ['/api-config.js', '/firebase-config.js'];

  if (!allowedPrefixes.some(prefix => pathname.startsWith(prefix)) && !allowedRootFiles.includes(pathname)) {
    next();
    return;
  }

  const filePath = path.resolve(process.cwd(), pathname.replace(/^\/+/, ''));
  if (!filePath.startsWith(process.cwd()) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    next();
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8'
  };

  res.setHeader('Content-Type', contentTypes[ext] || 'application/octet-stream');
  fs.createReadStream(filePath).pipe(res);
}

export default defineConfig({
  root: 'client', 
  plugins: [
    react(),
    {
      name: 'serve-existing-static-pages',
      configureServer(server) {
        server.middlewares.use(serveExistingStaticFile);
      }
    }
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000',
    }
  }
});
