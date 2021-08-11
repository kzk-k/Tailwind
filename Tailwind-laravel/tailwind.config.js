module.exports = {
    mode: 'jit',
    enabled: true,
    purge: ['./resources/views/**/*.{js,vue,blade.php,php}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
