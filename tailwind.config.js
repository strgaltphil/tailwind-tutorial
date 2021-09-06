module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
          animation: {
              tilt: "tilt 10s infinite linear"
          },
          keyframes: {
              tilt: {
                  "0%, 50%, 100%": {
                      transform: "rotate(0deg)"
                  },
                  "25%": {
                    transform: "rotate(1deg)"
                },
                "75%": {
                    transform: "rotate(-1deg)"
                }
              }
          }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};