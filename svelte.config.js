import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			split: false
		}),
		prerender: {
			default: true,
			onError: 'continue'
		}
	}
};

export default config;
