import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  plugins: [tailwindcss(), TanStackRouterVite({ autoCodeSplitting: true })]
});
