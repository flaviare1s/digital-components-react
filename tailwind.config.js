/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        'gap10': '10%',
        '30': '30%',
        '60': '60%',
      },
    },
  },
  plugins: [],
}

