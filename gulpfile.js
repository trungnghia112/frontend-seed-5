const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
// const cleanCSS = require('gulp-clean-css')
const newer = require('gulp-newer')
const gulpClean = require('gulp-clean')
const plumber = require('gulp-plumber')
const size = require('gulp-size')
const purgecss = require('gulp-purgecss')

const browserSync = require('browser-sync');
const server = browserSync.create()

const paths = {
  html: {
    src: './**/*.html',
    dest: '.'
  },
  styles: {
    src: 'scss/**/*.scss',
    dest: 'css/'
  },
  stylesMin: {
    src: 'scss/**/*.scss',
    dest: 'dist/'
  },
  scripts: {
    src: 'js/**/*.js',
    dest: 'dist/'
  },
  scriptsCore: {
    src: [
      'third_party/modernizr.min.js'
    ],
    dest: 'dist/'
  },
  images: {
    src: 'images_temp/**/*.{jpg,jpeg,png}',
    dest: 'images/'
  }
}

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return gulp.src(['dist', 'css'], { allowEmpty: true })
    .pipe(gulpClean())
}

/*
 * Define our tasks using plain functions
 */
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.reload({stream: true}))
}

/*
 * Define our tasks using plain functions
 */
function stylesMin() {
  return gulp
    .src(paths.stylesMin.src)
    .pipe(sass({ outputStyle: 'compressed' }))
    // .pipe(cleanCSS()) // pass in options to the stream
    .pipe(
      rename({
        basename: 'app',
        suffix: '.min'
      })
    )
    .pipe(size())
    .pipe(gulp.dest(paths.stylesMin.dest))
    .pipe(server.reload({stream: true}))
}

function unusedCSS() {
  return gulp
    .src('dist/**/*.css')
    .pipe(purgecss({
      content: ['./*.html']
    }))
    .pipe(gulp.dest('dist'))
}

function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(server.reload({stream: true}))
}

function scriptsCore() {
  return gulp
    .src(paths.scriptsCore.src, { sourcemaps: false })
    .pipe(plumber())
    // .pipe(babel())
    .pipe(uglify())
    .pipe(concat('core.min.js'))
    .pipe(size())
    .pipe(gulp.dest(paths.scriptsCore.dest))
    .pipe(server.reload({stream: true}))
}

function images() {
  return gulp
    .src(paths.images.src)
    .pipe(plumber())
    .pipe(newer(paths.images.dest)) // pass through newer images only
    .pipe(size())
    .pipe(gulp.dest(paths.images.dest))
    .pipe(server.reload({stream: true}))
}

function serve() {
  server.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
  gulp.watch(paths.scripts.src, scripts)
  gulp.watch(paths.scriptsCore.src, scriptsCore)
  gulp.watch(paths.styles.src, styles)
  // gulp.watch(paths.stylesMin.src, stylesMin)
  gulp.watch(paths.images.src, images)
  gulp.watch(paths.html.src).on('change', server.reload)
}

function watch() {
  gulp.watch(paths.scripts.src, scripts)
  gulp.watch(paths.scriptsCore.src, scriptsCore)
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.stylesMin.src, stylesMin)
  gulp.watch(paths.images.src, images)
}

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean
exports.styles = styles
exports.stylesMin = stylesMin
exports.unusedCSS = unusedCSS
exports.scripts = scripts
exports.scriptsCore = scriptsCore
exports.images = images
exports.watch = watch
exports.serve = serve

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
const build = gulp.series(
  clean,
  gulp.parallel(styles, stylesMin, scripts, scriptsCore, images),
  unusedCSS
)

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('clean', clean)
/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build)

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build)
