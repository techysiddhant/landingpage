/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				raleway: ["Raleway", "sans-serif"],
				fira: ["Fira Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				jakarta: ["Plus Jakarta Sans", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
