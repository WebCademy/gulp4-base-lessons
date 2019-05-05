var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('less', function() {
	return gulp.src('./app/less/main.less')
		.pipe(less())
		.pipe(gulp.dest('./app/css/'))
		.pipe(browserSync.stream())
});

gulp.task('server', function() {
	browserSync.init({
		server: { baseDir: './app/'}
	});
	gulp.watch('./app/**/*.html').on('change', browserSync.reload);
	gulp.watch('./app/less/**/*.less', gulp.series('less') );
});

gulp.task('default', gulp.series('less', 'server'));
