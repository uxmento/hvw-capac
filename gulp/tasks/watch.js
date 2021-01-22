/*
 * watch
 */

var config = require('../config');

var gulp = require('gulp'),
    browser_sync = require('browser-sync');

/* watch */
gulp.task('watch', function() {
  gulp.watch(config.twig.src + '**/*.twig', ['twig']).on('change', browser_sync.reload);
  gulp.watch(config.css.src + '**/*.scss', ['css']).on('change', browser_sync.reload);
  gulp.watch(config.javascript.src + '*.js', ['js']).on('change', browser_sync.reload);
  gulp.watch(config.icons.src + '*.svg', ['icons']).on('change', browser_sync.reload);
  gulp.watch(config.images.src + '*.{gif,jpg,jpeg,png,svg}', ['images']).on('change', browser_sync.reload);
  gulp.watch(config.fonts.src + '*.{woff2,woff,svg,eot,otf,ttf}', ['fonts']).on('change', browser_sync.reload);
});