/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#191624',
        primaryColor:'#1d375a'
      },
      backgroundImage: {
        star: "url('https://media0.giphy.com/media/xDBHj2WKmhEJIpzraR/200w.webp?cid=ecf05e47evypuyvy52xm8ma78p034uv429kwxxta0tctwg8q&rid=200w.webp&ct=g')",
        movingStar: "url('https://media4.giphy.com/media/UYBDCJjwOd9Re/giphy.gif?cid=ecf05e47ool0mzlj9h3jk5zhab1rka2dwkjpdytmi0rat24y&rid=giphy.gif&ct=g')",
        singer: "url('https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      fontFamily: {
        AndikaTitle: ['Andika', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin'),
  ],
};
