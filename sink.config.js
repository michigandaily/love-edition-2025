import { defineConfig } from 'sink';

export default defineConfig({
	fetch: [
		{
			type: 'doc',
			id: '',
			output: '',
			auth: '~/.daily-google-services.json'
		},
		{
			type: 'sheet',
			id: '11IcCL1XczOZ4WemixtNvGUEH9jClh_3qoEXy3b51ThM',
			sheetId: '1241751428',
			output: 'src/data/data.json',
			auth: '~/.daily-google-services.json'
		},
		{
			type: 'json',
			id: '',
			output: '',
			auth: '~/.daily-google-services.json'
		}
	],
	deployment: {
		region: 'us-east-2',
		bucket: 'specials.michigandaily.com',
		key: '2025/love-notes',
		build: './dist',
		profile: 'sink'
	}
});
