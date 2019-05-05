var gulp = require('gulp');

gulp.task('first', function(done){
	console.log('Самая первая задача! Это задача first!');
	done();
});

gulp.task('second', function(done){
	console.log('Вторая задача! Это задача second!');
	done();
});

gulp.task('third', function(done){
	console.log('Третья задача! Это задача third!');
	done();
});


// gulp.task('default', function(){
// 	console.log('Дефолтная задаа по умолчанию! Это задача default!');
// });

gulp.task('default', gulp.series('first', 'second', 'third'));
// gulp.task('default', gulp.parallel('first', 'second', 'third'));
