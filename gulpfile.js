var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('app/modules/**/**.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('app/style'))
});
gulp.task('watch', function () {
    watch('app/modules/**/**.sass', function (a, b) {
        gulp.run('sass');
    });
});