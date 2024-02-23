const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const { rollup } = require('rollup')
const browserSync = require('browser-sync').create();
// const clean = require('gulp-clean');

function scripts() {
    return src([
        // 'node_modules/three/build/three.module.js',
        // 'node_modules/three/examples/jsm/loaders/GLTFLoader.js',
        // 'node_modules/three/examples/jsm/controls/OrbitControls.js',

        'node_modules/gsap/dist/gsap.js',
        'node_modules/gsap/dist/ScrollTrigger.min.js',
        'node_modules/gsap/dist/ScrollToPlugin.min.js',

        'app/js/main.js',
        // 'app/js/three.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}
function scriptsThree() {
    return src(
        // 'node_modules/gsap/dist/gsap.js',
        // 'node_modules/gsap/dist/ScrollTrigger.min.js',
        // 'node_modules/gsap/dist/ScrollToPlugin.min.js',
       'app/js/three.js'
    )
        .pipe(concat('three.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function watching() {
    watch(['app/scss/*.scss'], styles);
    watch(['app/js/main.js'], scripts);
    watch(['app/js/three.js'], scriptsThree);
    watch(['app/*.html']).on('change', browserSync.reload)
}

// function cleanDist() {
//     return src('dist')
//         .pipe(clean())
// }

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function building() {
    return src([
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/js/three.min.js',
        'app/**/*.html'
    ], { base: 'app' })
        .pipe(dest('dist'))
}

exports.styles = styles;
exports.scripts = scripts;
exports.scriptsThree = scriptsThree
exports.watching = watching;
exports.browsersync = browsersync;

exports.build = series(building)
exports.default = parallel(styles, scripts,scriptsThree, browsersync, watching)