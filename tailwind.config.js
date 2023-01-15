const tailwindClipPath = require('tailwind-clip-path')
const base = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '4rem',
    },
    clipPath: {
      topLine:
        'polygon(0% 46%, 0% 54%, 30.5% 54%, 35.5% 8%, 64.5% 8%, 69.5% 54%, 100% 54%, 100% 46%, 70% 46%, 65% 0%, 35% 0%, 30% 46% )',
      topShade:
        'polygon(0% 54%, 0% 100%, 100% 100%, 100% 54%, 69.5% 54%, 64.5% 8%, 35.5% 8%, 30.5% 54%)',
      bottomLine:
        'polygon(0% 46%,0% 54%,30% 54%,35% 100%,65% 100%,70% 54%,100% 54%,100% 46%,69.5% 46%,64.5% 92%,35.5% 92%,30.5% 46%)',
      bottomShade:
        'polygon(0% 0%,0% 46%,30.5% 46%,35.5% 92%,64.5% 92%,69.5% 46%,100% 46%,100% 0%)',
    },
    extend: {
      colors: {
        queueYellow: '#ffd600',
        queueBlue: '#00b9e1',
        appPurple: '#c82ac2',
      },
      backgroundImage: {
        'app-bg': "url('/tech-bg.jpg')",
      },
      fontFamily: {
        pixelar: ['Pixelar', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindClipPath,
    base(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.5xl') },
        h2: { fontSize: theme('fontSize.3xl') },
        h3: { fontSize: theme('fontSize.xl') },
      })
    }),
  ],
}
