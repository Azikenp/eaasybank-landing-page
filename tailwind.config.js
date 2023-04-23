/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", './js/**/*.js',],
  theme: {
    screens: {
      sm: '400px',
      md: '600px',
      lg: '976px',
      xl: '1440px'
    },
    fontWeight: {
      normalFont: "300",
      boldFont: "400",
      boldest: "700",
    },
    width:{
      button: '140px',
      iconWidth: '55px',
      xs: '300px',
      sm: '375px',
      lrge: '750px'
    },
    fontSize: {
      xsm: '10px',
      sm: '11px',
      base: '14px',
      mid: '18px',
      midder: '20px',
      xl: '25px',
      xxl: '40px',
    },
    extend: {
      colors: {
        darkBlue: " hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        grayishBlue :"hsl(233, 8%, 62%)",
        lightGrayishBlue : "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)", 
        white : "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}

