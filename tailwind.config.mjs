/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", ...defaultTheme.fontFamily.serif],
        heading: ["Poppins", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: '#3C3E83', // define your custom color here
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(0px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        
      },
      animation: {
        fadeInUp: "fadeInUp 3s ease-in forwards",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.bg-overlay::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          'background-size': 'cover',
          'background-position': 'center',
          'background-image': 'url("https://www.veloxy.care/wp-content/uploads/2024/07/map_pattern_3.png")',
          'z-index': '0',
          opacity: '0.04',
        },
      }, {
        variants: ['responsive'],
      });
    }),
  ],
};
