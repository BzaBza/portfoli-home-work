var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('app/sass-styles/**/**.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('index-style.css'))
        .pipe(gulp.dest('app/style/index-styles'))
});


gulp.task('sassNav', function () {
    return gulp.src('app/modules/navigation/**.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('header.css'))
        .pipe(gulp.dest('app/style'))
});

gulp.task('sassFoo', function () {
    return gulp.src('app/modules/footer/**.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('footer.css'))
        .pipe(gulp.dest('app/style'))
});
gulp.task('watch', function () {
    watch('app/**/**/**.sass',
        function (a, b) {
            gulp.run('sassFoo','sassNav','sass');
        });
});


