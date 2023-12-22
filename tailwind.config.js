/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './**/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background-black))',
        foreground: 'hsl(var(--foreground))',
        'foreground-white': 'var(--foreground-white)',
        'foreground-black': 'var(--foreground-black)',
        'background-white': 'var(--background-white)',
        'background-beige': 'var(--background-beige)',
        'foreground-dark-gray': 'var(--foreground-dark-gray)',
        btn: {
          background: 'hsl(var(--btn-background))',
          'background-hover': 'hsl(var(--btn-background-hover))',
          'text-background-hover': 'var(--background-beige)',
        },
      },
      height: {
        '22': '90px',
        '1/2-screen': '50vh',
        '2/3-screen': '67vh',
      },
      spacing: {
        '22': '90px',
      },
      boxShadow: {
        'custom-light': '0px 10px 14px 0px rgba(0, 0, 0, 0.25)', // for light mode
        'custom-dark': '0px 10px 14px 0px rgba(0, 112, 129, 0.25)', // for dark mode
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
  ],
}
