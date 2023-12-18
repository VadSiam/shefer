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
      },
      spacing: {
        '22': '90px',
      },
    },
  },
  plugins: [],
}
