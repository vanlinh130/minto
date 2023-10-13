/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./**/*.html', './**/*.{js,jsx,ts,tsx,vue}'],
	content: [],
	theme: {
		extend: {
			colors: {
				whites: '#FFFFFF',
				aquas: '#34CEBC',
				darkBlue: '#02052E',
			},
			lineHeight: {
				78: '78.02px',
				33: '33.6px',
			},
			fontSize: {
				64: '64px',
				32: '32px',
			},
			width: {
				1140: '1140px',
			},
			height: {
				514: '514px',
			},
		},
	},
	plugins: [],
}
