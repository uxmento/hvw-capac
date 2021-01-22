/*
 * vendor
 */

var config = require('../config').vendor;

var del = require('del'),
    gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence'),
    gulp_plumber = require('gulp-plumber'),
    gulp_npm_files = require('gulp-npm-files'),
    browser_sync = require('browser-sync');

/* clean */
gulp.task('clean:vendor', function() {
  return del(config.dist);
});

/* build */
gulp.task('build:vendor', function() {
  return gulp.src(gulp_npm_files(), {
    base: './'
  })
    .pipe(gulp_plumber())
    .pipe(gulp.dest(config.dist))
    .pipe(browser_sync.stream({
      match: '**/*.*'
    }))
});

/* default */
gulp.task('vendor', function(callback) {
  gulp_sequence('clean:vendor', 'build:vendor')(callback)
});