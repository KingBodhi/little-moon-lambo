module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
         fontFamily: {
             D3: [ "D3" ],
             A3: [ "A3" ],
             H3: [ "H3" ],
         },
         spacing: {
        '60': '15rem',
        },
         translate: {
        '60': '15 rem',
        },
         rotate: {
       '5': '5deg',
        },
        gridTemplateRows: {
       // Simple 2 row grid
       '2': 'repeat(2, minmax(0, 1fr))',
       // Complex site-specific row configuration
       'layout': '1000px minmax(1000px, 1fr) 225px',
      },
 },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
