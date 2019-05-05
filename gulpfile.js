const { src, dest, watch, series, parallel, task } = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

function gulpLess(){
    return src('./app/less/main.less')
	    .pipe(less())
	    .pipe(dest('./app/css/'))
	    .pipe(browserSync.stream())
}

function gulpServer(done){
	browserSync.init({
       server: {
           baseDir: "./app/"
       }
	});
	done();
}

function gulpWatch(){
	watch('./app/**/*.html').on('change', browserSync.reload);
	watch('./app/less/**/*.less', series(gulpLess));
}

task('default', series(gulpLess, parallel(gulpServer, gulpWatch) ))

