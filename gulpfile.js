var gulp = require('gulp');

function gulpFirst (done) {
	console.log('Самая первая задача! Это задача first!');
	done();
}

function gulpSecond (done) {
	console.log('Вторая задача! Это задача second!');
	done();
}

function gulpThird (done) {
	console.log('Третья задача! Это задача third!');
	done();
}

gulp.task('default', gulp.series(gulpFirst, gulpSecond, gulpThird));
