/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        'outline-black': '2px 2px black',
      },      
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.5, 1) infinite',
        'spin-slow': 'AnimationName 3s ease infinite',
        'waving-hand': 'wave 2s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(1.1)', opacity: '0' },
        },
        
        
        
      }
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
