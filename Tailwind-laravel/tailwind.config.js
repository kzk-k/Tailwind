module.exports = {
    mode: 'jit',
    enabled: true,
    purge: ['./resources/**/*.{js,vue,blade.php}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
