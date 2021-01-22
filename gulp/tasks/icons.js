/*
 * icons
 */

var config = require('../config').icons;

var del = require('del'),
    gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence'),
    gulp_plumber = require('gulp-plumber'),
    gulp_svg_sprite = require('gulp-svg-sprite'),
    browser_sync = require('browser-sync');

/* clean */
gulp.task('clean:icons', function() {
  return del(config.dist);
});

/* build */
gulp.task('build:icons', function() {
  return gulp.src(config.src + '*.svg')
    .pipe(gulp_plumber())
    .pipe(gulp_svg_sprite({
      mode: {
        symbol: {
          dest: '.',
          sprite: 'sprite.svg',
        }
      },
      shape: {
        id: {
          generator: '%s'
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
      }
    }))
    .pipe(gulp.dest(config.dist))
    .pipe(browser_sync.stream({
      match: '*.svg'
    }))
});

/* default */
gulp.task('icons', function(callback) {
  gulp_sequence('clean:icons', 'build:icons')(callback)
});