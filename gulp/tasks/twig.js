/*
 * twig
 */

var config = require('../config').twig;

var del = require('del'),
    gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence'),
    gulp_plumber = require('gulp-plumber'),
    gulp_twig = require('gulp-twig'),
    browser_sync = require('browser-sync');

/* clean */
gulp.task('clean:twig', function() {
  return del(config.dist + '*.html');
});

/* build */
gulp.task('build:twig', function() {
  return gulp.src(config.src + 'pages/**/*.twig')
    .pipe(gulp_plumber())
    .pipe(gulp_twig({
      base: config.src
    }))
    .pipe(gulp.dest(config.dist))
    .pipe(browser_sync.stream({
      match: '**/*.twig'
    }))
});

/* default */
gulp.task('twig', function(callback) {
  gulp_sequence('clean:twig', 'build:twig')(callback)
});