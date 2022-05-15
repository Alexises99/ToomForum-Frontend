/* eslint-disable no-undef */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans'],
      },
      backgroundImage: {
        'switch-image': 'url("https://images.pexels.com/photos/6073129/pexels-photo-6073129.jpeg?cs=srgb&dl=pexels-lukas-medvedevas-6073129.jpg&fm=jpg")',
        'cat-image': 'url("https://images.pexels.com/photos/4075410/pexels-photo-4075410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'logo': 'url("./images/iconApp.png")'
      },
      colors: {
        primary: {
          'dark-blue': 'hsl(233, 26%, 24%)',
          'lime-green': 'hsl(136, 65%, 51%)',
          'bright-cyan': 'hsl(192, 70%, 51%)',
        },
        neutral: {
          'grayish-blue': 'hsl(233, 8%, 62%)',
          'light-grayish-blue': 'hsl(220, 16%, 96%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
      },
      inset: {
        '-42.6%': '-42.6%',
      },
    },
  },
  plugins: [
  ]
}
