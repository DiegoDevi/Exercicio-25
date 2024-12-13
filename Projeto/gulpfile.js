const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('./vendor/node_modules/gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function tarefasCSS(cb) {

    return gulp.src('./vendor/**/*.css')
    .pipe(concat('./libs.css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))
}

function tarefasJS(Callback){
    return gulp.src('./vendor/**/*.css')
    .pipe(concat('./libs.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./dist/js')) 

    return Callback()    
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.default = series( tarefasCSS, tarefasJS )