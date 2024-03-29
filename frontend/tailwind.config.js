module.exports = {
    safelist: [
        'pointer-events-none',
        'opacity-1',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    base: '#16322c',
                    dark: '#0f1d18',
                    hover: '#193933',
                },
                secondary: {
                    base: '#faf7f0',
                }
            },
            fontFamily: {
                core: ['Roboto', 'sans-serif'],
                heading: ['Hennigar', 'sans-serif'],
            },
            height: {
                heroCards: '380px',
            },
            spacing: {
                '7/10': '70%',
                '3/10': '30%'
            },
            transitionDuration: {
                '400': '400ms',
            },
            translate: {
                'full2': '200%',
                '101': '101%'
            },
            width: {
                heroCards: '400px',
            }
        }
    }
}
