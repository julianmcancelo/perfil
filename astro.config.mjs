import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio de perfil profesional — configuración de Astro
// https://docs.astro.build/es/reference/configuration-reference/
export default defineConfig({
  site: 'https://perfil-indol.vercel.app',
  trailingSlash: 'never',
  integrations: [sitemap()],
  server: { port: 4321 },
  build: {
    inlineStylesheets: 'auto',
  },
});
