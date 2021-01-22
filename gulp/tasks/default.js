/*
 * default
 */

var gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence');

/* default */
gulp.task('default', function(callback) {
  gulp_sequence('build', 'watch', 'browser_sync')(callback)
});