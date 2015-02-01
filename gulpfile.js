var gulp                = require('gulp'),
    $                   = require('gulp-load-plugins')(),
    browserSync         = require('browser-sync'),
    webpack             = require('gulp-webpack');

var DEST = './build',
    src = {};

gulp.task('default', ['serve']);

gulp.task('browser-sync', function(){
    browserSync({
        notify: true,
        server: {
            baseDir: ['build']
        }
    });
});

gulp.task('pages', function(){
    src.pages = './src/**/*.html';
    return gulp.src(src.pages)
        .pipe(gulp.dest(DEST));
});

gulp.task('bundle', function(cb){
    var config = require('./webpack.config.js')();

    return gulp.src('src/entry.js')
        .pipe(webpack(config, null, function(err, stats) {
            if(err) {
                throw new $.util.PluginError('webpack', err);
            }
            //$.util.log('[webpack]', stats.toString({colors: true}));
        }))
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.reload({stream:true}));;
});

gulp.task('serve', ['browser-sync', 'pages', 'bundle'], function(cb){
    gulp.watch(src.pages, ['pages', browserSync.reload]);
    cb();
});