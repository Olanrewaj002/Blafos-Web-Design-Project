/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  corePlugins: {
    preflight: true, // Ensure this is enabled if needed
  },
}

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
   
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '168': '52rem',
      }
      }
    },

  plugins: [],
}



