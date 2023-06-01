/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'text-header': '#94A3B8',
        'text-header-active': '#67C2C3',
        'bg-header': '#1E293B'
      },
      fontFamily: {
        'header': ['Mulish'],
        'base': ['Inter']
      }
    },
  },
  plugins: [],
}

