/*
 * images
 */

var config = require('../config').images;

var del = require('del'),
    gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence'),
    gulp_plumber = require('gulp-plumber'),
    gulp_imagemin = require('gulp-imagemin'),
    browser_sync = require('browser-sync');

/* clean */
gulp.task('clean:images', function() {
  return del(config.dist);
});

/* copy */
gulp.task('copy:images', function() {
  return gulp.src(config.src + '*.{gif,jpg,jpeg,png,svg}')
    .pipe(gulp_plumber())
    .pipe(gulp.dest(config.dist))
    .pipe(browser_sync.stream({
      match: '*.{gif,jpg,jpeg,png,svg}'
    }))
});

/* build */
gulp.task('build:images', function() {
  return gulp.src(config.src + '*.{gif,jpg,jpeg,png,svg}')
    .pipe(gulp_plumber())
    .pipe(gulp_imagemin())
    .pipe(gulp.dest(config.dist))
    .pipe(browser_sync.stream({
      match: '*.{gif,jpg,jpeg,png,svg}'
    }))
});

/* default */
gulp.task('images', function(callback) {
  gulp_sequence('clean:images', 'copy:images')(callback)
});