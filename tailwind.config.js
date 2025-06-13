/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        'brand-green': '#50ad32',
        'brand-green-ultra-light': '#EEF7E9',
        'brand-black': '#000000',
        'brand-navy': '#1f4074',
        'brand-white': '#FFFFFF',
        'neutral-gray': '#F5F5F5',
        'text-dark': '#2D2D2D',
        'text-light': '#6B7280',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
