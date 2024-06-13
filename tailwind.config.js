/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      inset: {
        '0': 0,
        auto: 'auto',
        '1/2': '50%',
      },
      objectPosition: {
        'center': 'center',
        'top': 'top',
        'right': 'right',
        'bottom': 'bottom',
        'left': 'left',
      }
    },
  },
  plugins: [],
}

