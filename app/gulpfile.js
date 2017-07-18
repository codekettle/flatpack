var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', ()=>{
    gulp.src('./index.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build'))
});