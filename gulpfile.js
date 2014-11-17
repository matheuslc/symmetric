var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    connect = require('gulp-connect');


gulp.task('server', function() {
  connect.server();
});

gulp.task('ci', function() {
  return gulp.src([
    'src/*',
  ])
  .pipe(jshint())
  .pipe(jshint.reporter('default', { verbose: true }))
  .pipe(jshint.reporter('fail'));
});
