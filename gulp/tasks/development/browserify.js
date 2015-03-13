var gulp = require('gulp');
var config = require('../../config').browserify;
var browserSync  = require('browser-sync');
var browserify = require('gulp-browserify');

gulp.task("browserify", function(){
    gulp.src(config.src)
        .pipe(browserify({
            insertGlobals : false,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));

});

