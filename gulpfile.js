var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function (callback) {
    runSequence('build', callback);
});

gulp.task('build', function(callback) {
    runSequence('clean', 'copy-build', callback);
});

gulp.task('clean', function(callback) {

});

// dependencies are run before
gulp.task('copy-build', ['copy-assets', 'copy-app-js', 'copy-vendor-js']);

gulp.task('copy-assets', function () {

});

gulp.task('copy-app-js', function () {
    
});

gulp.task('copy-vendor-js', function () {
    return gulp.src('./vendor/**/*.js')
        .pipe(gulp.dest('./build/vendor'));
});