var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('default', function (callback) {
    runSequence('build', callback);
});

gulp.task('build', function(callback) {
    runSequence('clean', 'copy-build', callback);
});

gulp.task('clean', function() {
    return del(['./build'], {force:true});
});

// dependencies are run before
gulp.task('copy-build', ['copy-assets', 'copy-app-js', 'copy-vendor-js']);

gulp.task('copy-assets', function () {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./build/assets'));
});

gulp.task('copy-app-js', function () {
        return gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-vendor-js', function () {
    return gulp.src('./vendor/**/*.js')
        .pipe(gulp.dest('./build/vendor'));
});