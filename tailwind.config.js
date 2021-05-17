// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '10px 0px rgba(0, 0, 0, 0)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '15px 0px 5px 15px rgba(0, 0, 0, 0.1)',
     2: '15px 0px 5px 15px rgba(0, 0, 0, 0.1)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    minWidth:{
      '0':'0',
      '9':'9'
    },
    extend: {
      outline:
       {
        blue: '2px 2px solid #0000ff',
      },
      zIndex: {
        '1900': '1900',
       },
      lineHeight: {
       'leading-275': '2.75',
       '12': '3rem',
      },
      fontFamily:{
        body:['inter']
      },
      keyframes: {
        animate: {
          '0%': { text: 'makers' },
          '50%': { text: 'founders' },
          '75%': { text: 'entrepreneurs' },
        }
       },
       animation: {
        'animate-text': 'animate 1s infinite',
       }
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      xtra:'0 2px 18px 0 rgb(0 0 0 / 4%)'
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [
   
  ],
}