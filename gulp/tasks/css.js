/*
 * css
 */

var config = require('../config').css;

var del = require('del'),
    gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence'),
    gulp_plumber = require('gulp-plumber'),
    gulp_sourcemaps = require('gulp-sourcemaps'),
    gulp_sass = require('gulp-sass'),
    gulp_postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssmqpacker = require('css-mqpacker'),
    cssnano = require('cssnano'),
    browser_sync = require('browser-sync');

/* plugins */
var plugins = [
  cssmqpacker({
    sort: true
  }),
  autoprefixer(),
  cssnano()
];

/* clean */
gulp.task('clean:css', function() {
  return del(config.dist);
});

/* build */
gulp.task('build:css', function() {
  return gulp.src(config.src + 'app.scss')
    .pipe(gulp_plumber())
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_sass())
    .pipe(gulp_postcss(plugins))
    .pipe(gulp_sourcemaps.write(config.map))
    .pipe(gulp.dest(config.dist))
    .pipe(browser_sync.stream({
      match: '**/*.css'
    }))
});

/* default */
gulp.task('css', function(callback) {
  gulp_sequence('clean:css', 'build:css')(callback)
});