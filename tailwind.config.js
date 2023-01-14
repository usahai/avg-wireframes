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
      },
    },
  },
  plugins: [
    tailwindClipPath,
    base(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
      })
    }),
  ],
}
