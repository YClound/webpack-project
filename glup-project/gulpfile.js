var gulp = require ('gulp');
var brower = require ('browser-sync');
var less = require ('gulp-less');


// 解析less文件输出到dest
gulp.task('less', function () {
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/assets'))
})

gulp.task('default', ['less'], function () {
    
})