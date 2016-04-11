var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('public/stylesheets/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('assets/sass/*.sass', ['sass']);
});
