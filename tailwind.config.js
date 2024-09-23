/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes:{
        "loop-scroll": {
          from:{ transform: "translateX(0)" },
          to:{ transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        'Montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'Bruno': ['var(--font-bruno)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
