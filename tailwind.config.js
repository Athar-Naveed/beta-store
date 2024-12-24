/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: "#034C8C",
        secondary: "#27A5BF"
		},
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to bottom, #27A5BF, #FFFFFF)',
    },
	}
  },
  plugins: [require("tailwindcss-animate")],
}

