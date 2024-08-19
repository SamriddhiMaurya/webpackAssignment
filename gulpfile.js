const {src, dest, watch} = require('gulp') ;
const minifyJs = require('gulp-uglify') 
const sourceMaps = require('gulp-sourcemaps')
const concat = require('gulp-concat');

const jsFiles = ["./static/js/jsfile2.js", "./static/js/jsfile1.js"];

const bundleJs =()=>{
    return src(jsFiles)
        .pipe(minifyJs())
        .pipe(concat('bundle.js'))
        .pipe(sourceMaps.write())
    .pipe(dest('./dist/static/js/'));
}



const devWatch = () => {
    watch('./static/js/**/*.js', bundleJs)
}

exports.bundleJs = bundleJs; 
exports.devWatch = devWatch; 