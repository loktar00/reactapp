var gulp                = require('gulp'),
    $                   = require('gulp-load-plugins')(),
    browserSync         = require('browser-sync'),
    webpack             = require('gulp-webpack'),
    argv                = require('minimist')(process.argv.slice(2)),
    DEST = './build',
    RELEASE = !!argv.release,
    src = {};

gulp.task('default', ['serve']);

// Run on server, or to test minification ect. doesn't spin up local server
gulp.task('build', ['pages', 'bundle']);

// Starts local server auto reloads, ect.
gulp.task('browser-sync', function(){
    browserSync({
        notify: true,
        server: {
            baseDir: ['build']
        }
    });
});

// markup task
gulp.task('pages', function(){
    src.pages = './src/**/*.html';
    return gulp.src(src.pages)
        .pipe(gulp.dest(DEST));
});

// Pass everything through webpack. 
// TODO remove dependency on gulp and just use webpack
gulp.task('bundle', function(cb){
    var config = require('./webpack.config.js')(RELEASE);

    return gulp.src('src/entry.js')
        .pipe(webpack(config, null, function(err, stats) {
            if(err) {
                throw new $.util.PluginError('webpack', err);
            }
            if(!RELEASE){
                $.util.log('[webpack]', stats.toString({colors: true}));
            }
        }))
        .pipe(gulp.dest('build/'))
        .pipe($.if(RELEASE, browserSync.reload({stream:true})))
});

// Watches for changes.
gulp.task('serve', ['browser-sync', 'pages', 'bundle'], function(cb){
    gulp.watch(src.pages, ['pages', browserSync.reload]);
    cb();
});