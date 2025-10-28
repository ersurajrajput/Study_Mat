/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#111827',
        'secondory-dark':'#1F2937',
        'accent-blue': '#3B82F6',
        'accent-hover': '#2563EB',
        'text-light': '#D1D5DB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
