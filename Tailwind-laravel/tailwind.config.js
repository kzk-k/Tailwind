const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./resources/views/**/*.{js,vue,blade.php,php}'],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                baseColor: 'var(--color-base)',
                bland: 'var(--color-bland)',
                lightGray: {
                    1: 'var(--color-light-gray-1)',
                    2: 'var(--color-light-gray-2)',
                },
                gray: {
                    1: 'var(--color-gray-1)',
                    2: 'var(--color-gray-2)',
                    3: 'var(--color-gray-3)',
                    4: 'var(--color-gray-4)',
                },
            },
        },
        fontFamily: {
            roboto: 'var(--font-roboto)',
        },
        screens: {
            xs: {
                max: '374px',
            },
            ...defaultTheme.screens,
        },
    },
    variants: {
        extend: {},
        lineClamp: ['responsive'],
    },
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
