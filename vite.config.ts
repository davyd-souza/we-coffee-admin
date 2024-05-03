import path from 'node:path'
import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

import type { InlineConfig } from 'vitest'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	test: {
		setupFiles: './test/setup.ts',
		environment: 'happy-dom',
	},
} as UserConfig & {
	test: InlineConfig
})
