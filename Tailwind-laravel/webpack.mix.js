const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.webpackConfig({
//     watchOptions: {
//         ignored: /node_modules/,
//     },
// });

mix.setPublicPath('public')
    // .js('resources/js/app.js', 'js')
    // .vue()
    .postCss('resources/css/tailwind.css', 'css/')
    .postCss('resources/css/top/style.css', 'css/top/')
    .options({
        postCss: [require('tailwindcss'), require('autoprefixer')],
        processCssUrls: false,
        hmrOptions: {
            host: 'localhost',
            port: '8081',
        },
    })
    .browserSync({
        files: ['./**/*.php', './public/**/*.css'],
        proxy: 'http://127.0.0.1:8080/',
        startPath: 'resources/views/top/index.php',
    })
    .disableNotifications();
