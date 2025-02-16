import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dsv from '@michigandaily/rollup-plugin-dsv';
import nunjucks from '@michigandaily/vite-plugin-transform-nunjucks';

import config from './sink.config.js';

// https://vitejs.dev/config/
export default defineConfig({
	base: config.deployment.key.length === 0 ? '/' : `/${config.deployment.key}/`,
	plugins: [
		react(),
		dsv({ include: ['**.csv', '**.tsv', '**.dsv'] }),
		nunjucks({
			hed: 'The Statement Love Edition 2025',
			dek: 'The Statement Magazine presents: Love Edition 2025',
			social_img: 'https://www.michigandaily.com/wp-content/uploads/2025/02/love-edition-cover-page-scaled.jpg',
			google_analytics: '',
			url: 'https://specials.michigandaily.com/2025/love-notes'
		})
	]
});
