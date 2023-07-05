/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary2': '#0b3772',
				'primary': '#00666a',
				'black2': '#363434',
			  },
		},
	},
	plugins: [],
}
