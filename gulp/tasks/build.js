/*
 * build
 */

var gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence');

/* build */
gulp.task('build', function(callback) {
  gulp_sequence('twig', 'css', 'js', 'icons', 'images', 'fonts', 'vendor')(callback)
});