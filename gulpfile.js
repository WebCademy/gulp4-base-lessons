var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('./app/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('./app/css/'))
		.pipe(browserSync.stream())
});

gulp.task('server', function() {
	browserSync.init({
		server: { baseDir: './app/'}
	});
	gulp.watch('./app/**/*.html').on('change', browserSync.reload);
	gulp.watch('./app/scss/**/*.scss', gulp.series('sass') );
});

gulp.task('default', gulp.series('sass', 'server'));
