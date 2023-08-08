/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        popone: ['Mochiy Pop One'],
      },
      colors: {
        hejo: '#33FE00',
        ungu: '#8C2982',
        button: '#00FFF0',
        bgasin: '#B1F9CE',
        tungu: '#8914E5',
        rectangle: '#FB4EFF',
      },
      keyframes: {
        animasi: {
          '0%, 100%': { transform: 'translateY(-9%)' },
          '50%': { transform: 'translateY(0)' },
        },
        planet: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        animasi: 'animasi 3s linear infinite',
        planet: 'planet 5s linear infinite',
      },
    },
  },
  plugins: [],
};
