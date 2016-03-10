var gulp = require('gulp');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var cssbeautify = require('gulp-cssbeautify');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var cssimport = require("gulp-cssimport");
var watch = require("gulp-watch");
var livereload = require("gulp-livereload");
var ftp = require('vinyl-ftp');

// création fichier production normal
gulp.task('build', function() {
    gulp.src('./src/**/style.scss')
        .pipe(sass().on('error', sass.logError))
    	.pipe(cssimport())
        .pipe(csscomb())
        .pipe(cssbeautify({indent: '  '}))
        .pipe(autoprefixer())    
        .pipe(gulp.dest('./css/'));
});

// création fichier production minifé
gulp.task('prod', function() {
    gulp.src('./src/**/style.scss')
        .pipe(sass().on('error', sass.logError))
    	.pipe(cssimport())
        .pipe(autoprefixer())  
        .pipe(csso())    
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest('./css/'))
});


// envoi ftp
var localFilesGlob = ['.css/**'];  
var remoteFolder = '/wp-content/themes/wiatheme-sass';
gulp.task( 'deploy', function () {

    var conn = ftp.create( {
        host:     'myhost',
        user:     'myusername',
        password: 'mypassword'
    } );
    

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( localFilesGlob, { cwd: '.', buffer: false } )
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files
        .pipe( conn.dest( remoteFolder ) );
} );

//Watch task
gulp.task('default',function() {   
    gulp.watch('./src/**/*.scss',['build', 'prod']);
    gulp.watch('./css/**/*.css', ['deploy']);
        /*.on('change', function(event) {
          console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);
          return gulp.src( [event.path], { base: '.', buffer: false } )
            .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
            .pipe( conn.dest( remoteFolder ) )
          ;
        });*/
});
