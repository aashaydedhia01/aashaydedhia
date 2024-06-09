import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      purple: {
        light: '#EBC6FF',
        DEFAULT: '#B026FF',
      },
      gray: {
        thin: '#989DA9',
        light: '#344054',
      },
    },
    extend: {
      width: {
        page: '1104px',
      },
      maxWidth: {
        page: '1104px',
      },
      backgroundImage: {
        'gradient-about':
          'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(250,241,255,1) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
