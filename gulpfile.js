const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');


// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

///minify css + rename
gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
  .pipe(cleanCSS({debug: true}, (details) => {
  console.log(`${details.name}: ${details.stats.originalSize}`);
  console.log(`${details.name}: ${details.stats.minifiedSize}`);
  }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./'));
  });
