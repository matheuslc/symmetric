var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    connect = require('gulp-connect'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename');


gulp.task('server', function() {
  connect.server({
    port: 3001
  });
});

gulp.task('ci', function() {
  return gulp.src([
    'src/symmetric.js',
  ])
  .pipe(jshint())
  .pipe(jshint.reporter('default', { verbose: true }))
  .pipe(jshint.reporter('fail'));
});

gulp.task('scripts', function() {
  return gulp.src(['src/symmetric.js'])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/'))
});

gulp.task('default', ['server', 'ci', 'scripts'], function() {
  gulp.watch('src/symmetric.js', ['ci', 'scripts']);
});
