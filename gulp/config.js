var dest = "./build";
var src = './src';

module.exports = {
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: dest
        }
    },
    markup: {
        src  : src + "/htdocs/**",
        dest : dest
    },
    browserify : {
        src  : src + "/js/main.js",
        dest : dest + "/js",
        watchSrc : src + "/js/{,*/}*.js"
    },
    scss : {
        src: src + "/scss/**/*.scss",
        dest: dest + "/css"
    }
};
