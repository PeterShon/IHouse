const gulp = require('gulp')

module.exports = function modules() {
  gulp.src('src/visitors_list.txt')
    .pipe(gulp.dest('docs'))
  gulp.src('src/modules/**/*')
    .pipe(gulp.dest('docs/modules'))
  return gulp.src('src/*.php')
    .pipe(gulp.dest('docs'))
}

