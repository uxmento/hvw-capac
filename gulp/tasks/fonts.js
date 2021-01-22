/*
 * fonts
 */

var config = require('../config').fonts;

var del = require('del'),
    gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence'),
    gulp_plumber = require('gulp-plumber'),
    browser_sync = require('browser-sync');

/* clean */
gulp.task('clean:fonts', function() {
  return del(config.dist);
});

/* build */
gulp.task('build:fonts', function() {
  return gulp.src(config.src + '*.{woff2,woff,svg,eot,otf,ttf}')
    .pipe(gulp_plumber())
    .pipe(gulp.dest(config.dist))
    .pipe(browser_sync.stream({
      match: '*.{woff2,woff,svg,eot,otf,ttf}'
    }))
});

/* default */
gulp.task('fonts', function(callback) {
  gulp_sequence('clean:fonts', 'build:fonts')(callback)
});