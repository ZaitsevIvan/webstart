const {src, dest, watch}  = require('gulp');
const browserSync     = require('browser-sync').create();
const rename          = require('gulp-rename');
const cleanCSS        = require('gulp-clean-css');
const sass            = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// Static server
function bs() {
  serveSass;
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("*.js").on('change', browserSync.reload);
};

//minify css + rename
function minify() {
  return gulp.src('css/*.css')
  .pipe(cleanCSS({debug: true}, (details) => {
  console.log(`${details.name}: ${details.stats.originalSize}`);
  console.log(`${details.name}: ${details.stats.minifiedSize}`);
  }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(dest('./'));
  };

  // Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/*.sass")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;