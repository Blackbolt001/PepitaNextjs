/** @type {import('tailwindcss').Config} */
module.exports = 
{
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunflower': "url('/assets/sunflowers.jpg')"
      },
      colors: { 
        accent:{
          1:"hsl(288 95.8% 90.6%)",
          2: "hsl(168 83.8% 78.2%)",
      },
      bkg:"hsl(210 80% 98%)",
      content: "hsl(217 82.6% 17.5%)",
      },
  },
},
  plugins: [],
};
