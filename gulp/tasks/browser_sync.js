/*
 * browser sync
 */

var config = require('../config').browser_sync;

var gulp = require('gulp'),
    browser_sync = require('browser-sync');

/* browser sync */
gulp.task('browser_sync', function() {
  browser_sync.init({
    proxy: config.url
  });
});