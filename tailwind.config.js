/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        'primary-green': '#495E57',
        'primary-yellow': '#F4CE14',
        'secondary-orange': '#EE9972',
        'secondary-beige': '#FBDABB',
        'highlight-light': '#EDEFEE',
        'highlight-dark': '#333333',
      },
      fontFamily: {
        'heading': ['Markazi Text', 'serif'],
        'body': ['Karla', 'sans-serif'],
      },
      fontSize: {
        'display': '4rem',    // 64px
        'h2': '2.5rem',        // 40px
        'h3': '1.5rem',        // 24px
        'h4': '1.25rem',       // 20px
      },
    },
  },
  plugins: [],
}



