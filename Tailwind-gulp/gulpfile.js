const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const cache = require('gulp-cached');

// reload
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync');

// css
const progeny = require('gulp-progeny');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const tailwindcss = require('tailwindcss');
const tailwindConfig = require('./tailwind.config.js');

// const cssbeautify = require('gulp-cssbeautify');
const minifycss = require('gulp-clean-css');

//
const path = {
    view: './**/*.php',
    css: './resources/css/**/*.css',
    dest: './public/css/',
};

function cssFunc() {
    return (
        gulp
            .src([path.css])
            .pipe(
                plumber({
                    errorHandler: notify.onError('Error: <%= error.message %>'),
                })
            )
            .pipe(progeny())
            .pipe(postcss([tailwindcss(tailwindConfig), autoprefixer({ grid: true }), postcssImport, postcssNested]))
            // .pipe(
            //     cssbeautify({
            //         indent: '\t',
            //     })
            // )
            .pipe(minifycss())
            .pipe(gulp.dest(path.dest))
            .pipe(browserSync.stream())
    );
}

function connectSync() {
    connect.server(
        {
            port: 9999,
            base: '../Tailwind-gulp/',
        },
        function () {
            browserSync({
                proxy: 'localhost:9999/',
                // , startPath: 'service/'
                ghostMode: false,
            });
        }
    );
}

function reload(done) {
    browserSync.reload();
    done();
}

function watchFiles() {
    gulp.watch(path.view, gulp.series(cssFunc, reload));
    gulp.watch(path.css, cssFunc);
}

exports.default = gulp.parallel([watchFiles, connectSync]);
