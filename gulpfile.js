var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload')
var htmlReloadPath = './**/*.html' 

gulp.task('sass',function(){
	gulp.src('./css/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'))
	.pipe(livereload())
})

gulp.task('watch',function(){
	livereload.listen();
	gulp.watch('css/*.scss',['sass']);
	gulp.watch(htmlReloadPath,function(){
		gulp.src(htmlReloadPath).pipe(livereload());
	})
})