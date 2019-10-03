
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: 'src',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./src/assets/styles'));
});

gulp.task('livereload', function (){
  gulp.src(['./src/**/*', './src/*.html'])
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./src/assets/styles/**/*.scss', ['sass']);
  gulp.watch('./src/*.html', ['livereload']);
  gulp.watch('./src/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);