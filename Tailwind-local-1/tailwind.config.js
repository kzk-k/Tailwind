module.exports = {
    mode: 'jit',
    purge: {
        // enabled: true,
        content: ['./*.php', './**/*.php', './*.html', './**/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
