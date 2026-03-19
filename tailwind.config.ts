import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:          '#03020a',
        surface:      '#080614',
        layer:        '#0d0b1e',
        paper:        '#f5f3ef',
        'warm-white': '#faf9f6',
        accent:       '#7be89f',
        'accent-light': '#b5f0ce',
        'accent-dark':  '#0e9cb0',
        'accent-mid':   '#4fc1a8',
        muted:        '#8b8595',
        'muted-dark': '#5c5670',
        purple:       '#7c3aed',
        'purple-light': '#a855f7',
        blue:         '#2563eb',
      },
      fontFamily: {
        sans:  ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'fade-up':       'fadeUp 0.7s ease forwards',
        'fade-up-slow':  'fadeUp 1s ease forwards',
        'float':         'float 8s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)',
      },
    },
  },
  plugins: [],
}
export default config
