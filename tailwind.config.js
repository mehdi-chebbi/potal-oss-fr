// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				brandBlue: '#007bff',
				brandYellow: '#ffc107',
			},
		},
  },
  plugins: [],
}