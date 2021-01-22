/*
 * js
 */

var config = require('../config').javascript;

var del = require('del'),
    gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence'),
    gulp_plumber = require('gulp-plumber'),
    gulp_sourcemaps = require('gulp-sourcemaps'),
    gulp_babel = require('gulp-babel'),
    gulp_concat = require('gulp-concat'),
    gulp_uglify = require('gulp-uglify'),
    browser_sync = require('browser-sync');

/* clean */
gulp.task('clean:js', function() {
  return del(config.dist);
});

/* build */
gulp.task('build:js', function() {
  return gulp.src([
    'node_modules/babel-polyfill/dist/polyfill.js',
    config.src + '*.js'
  ])
    .pipe(gulp_plumber())
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_babel({
      presets: config.options
    }))
    .pipe(gulp_concat('app.js'))
    .pipe(gulp_uglify())
    .pipe(gulp_sourcemaps.write(config.map))
    .pipe(gulp.dest(config.dist))
    .pipe(browser_sync.stream({
      match: '**/*.js'
    }))
});

/* default */
gulp.task('js', function(callback) {
  gulp_sequence('clean:js', 'build:js')(callback)
});