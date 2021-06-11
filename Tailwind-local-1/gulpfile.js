const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const cache = require('gulp-cached');

// reload
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync');

// css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const tailwindConfig = require("./tailwind.config.js");

// const cssbeautify = require('gulp-cssbeautify');
const minifycss = require('gulp-clean-css');

//
const path = {
    views: './**/*.php',
    dev: './dev-css/**/*.css',
    dest: './css/',
};


function cssFunc() {
    return gulp
        .src([path.dev])
        .pipe(
            plumber({
                errorHandler: notify.onError('Error: <%= error.message %>'),
            })
        )
        .pipe(postcss([
            tailwindcss(tailwindConfig),
            autoprefixer
        ]))
        // .pipe(
        //     cssbeautify({
        //         indent: '\t',
        //     })
        // )
		.pipe(minifycss())
        .pipe(gulp.dest(path.dest))
        .pipe(browserSync.stream());
}


function connectSync() {
    connect.server(
        {
            port: 8001,
            base: '../Tailwind-local-1/',
        },
        function () {
            browserSync({
                proxy: 'localhost:8001/',
                // , startPath: 'service/index.php'
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
    gulp.watch(path.views, reload);
    gulp.watch(path.dev, cssFunc);
}

const watch = gulp.parallel([watchFiles, connectSync]);
exports.default = watch;
