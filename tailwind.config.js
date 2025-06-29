export default {
    theme: {
        extend: {
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(0px)' },
                    '25%': { transform: 'translateX(25px)' },
                    '50%': { transform: 'translateX(50px)' },
                    '75%': { transform: 'translateX(75px)' },
                    '100%': { transform: 'translateX(100px)' },
                },
            },
            animation: {
                slide: 'slide 2s ease-in-out infinite alternate',
            },
        },
    },
};
