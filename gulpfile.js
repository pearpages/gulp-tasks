var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var inject = require('gulp-inject');
var serve = require('gulp-serve');
var files = require('./gulp/gulp.config.js');

gulp.task('default', function (callback) {
    runSequence('build', 'serve', callback);
});

gulp.task('build', function(callback) {
    runSequence('clean', 'copy-build', 'index', callback);
});

gulp.task('clean', function() {
    return del([files.build_dir], {force:true});
});

gulp.task('serve', serve('build'));

gulp.task('index', function () {
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src(files.app_files.tpl_src), {ignorePath: 'build'}))
        .pipe(gulp.dest(files.build_dir));
});

// dependencies are run before
gulp.task('copy-build', ['copy-assets', 'copy-app-js', 'copy-vendor-js']);

gulp.task('copy-assets', function () {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest(files.build_dir+'/assets'));
});

gulp.task('copy-app-js', function () {
        return gulp.src('./src/**/*.js')
        .pipe(gulp.dest(files.build_dir));
});

gulp.task('copy-vendor-js', function () {
    return gulp.src('./vendor/**/*.js')
        .pipe(gulp.dest(files.build_dir+'/vendor'));
});