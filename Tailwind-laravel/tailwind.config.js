const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    // mode: 'jit',
    // purge: ['./resources/views/**/*.{js,vue,blade.php,php}'],
    content: ['./resources/views/**/*.{js,vue,blade.php,php}'],
    darkMode: 'media',
    theme: {
        colors: {
            bland: 'var(--color-bland)',
            // defaultThemeを使うときはmy-を付けて両方活かす
            gray: {
                1: '#eee',
                2: '#333',
                3: '#666',
            },
            red: {
                1: '#dc3545',
            },
            blue: {
                1: '#283b64',
            },
            // ...defaultTheme.colors,
            // defaultThemeを消したときに使うやつ
            transparent: 'transparent',
            current: 'currentColor',
            white: '#fff',
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
