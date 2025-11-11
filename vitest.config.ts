import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    pool: 'threads',
    include: ['test/**/*.{test,spec}.{ts,tsx}'],
  },
  esbuild: {
    jsxInject: 'import React from "react"',
  },
});