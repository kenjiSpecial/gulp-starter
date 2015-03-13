var gulp = require('gulp');
var browerSync = require('browser-sync');
var config   = require('../config');

gulp.task('default', ['markup', 'browserify', 'scss', 'images'], function(){
    //console.log("hello world");

    gulp.watch(config.scss.src, ['scss']);
    gulp.watch(config.markup.src, ['markup']);
    gulp.watch(config.browserify.watchSrc, ['browserify']);
    gulp.watch(config.images.src, ['images']);
    //gulp.watch()

    browerSync(config.browserSync);
});
