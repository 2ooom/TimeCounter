var gulp = require('gulp');

var less = require('gulp-less');
var path = require('path');

var base64 = require('gulp-base64');

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

gulp.task('base64', function () {
    gulp.src('./app/css/*.css')
        .pipe(base64())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('default', ['less', 'base64']);

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less', 'base64']);
});