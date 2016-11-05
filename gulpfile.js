var gulp = require('gulp');

gulp.task('default', function () {
    console.log('HELLO WORLD');
});

gulp.task('copy-build', ['copy-assets', 'copy-app-js', 'copy-vendor-js']);

gulp.task('copy-assets', function () {

});

gulp.task('copy-app-js', function () {
    
});

gulp.task('copy-vendor-js', function () {
    
});