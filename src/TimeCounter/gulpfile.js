var gulp = require('gulp');

var less = require('gulp-less');
var path = require('path');

var paths = {
  less: ['./app/css/*.less']
};
gulp.task('less', function () {
  gulp.src(paths.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('default', ['less']);

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});