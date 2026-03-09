import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server', // -> Tambahkan baris ini untuk mengaktifkan SSR
  integrations: [react()]
});