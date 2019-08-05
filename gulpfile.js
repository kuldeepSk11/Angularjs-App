
/********* all variable and pulgin definite here ***********/
var gulp = require('gulp');
var sass = require('gulp-sass'); // this is use to complie and short hand code for css
var uglify = require('gulp-uglify')// this is use to minify all js file
var concat = require('gulp-concat');// this is use to concot multiple file into a one file 
var autoprefixer = require('gulp-autoprefixer');//this is use to auto add all css browser support code 
var cleanCSS = require('gulp-clean-css');// this is use to minify all css file
var imagemin = require('gulp-imagemin');// this is use to Minify PNG, JPEG, GIF and SVG images with imagemin
var svgmin = require('gulp-svgmin');// this is use to minify all svg icon
var plumber = require('gulp-plumber');// this is use to show your error which line or which mistake u done
var sourcemaps = require('gulp-sourcemaps');//this is use provide give source map our css or js file 
var watch = require('gulp-watch');// this is use to watch our all change and auto run
var browserSync = require('browser-sync').create();// this is use to auto sync code into browser like your 
                                                    //change update automatic on browser

/***====== All Task and fucntion definition here========**/

//========== it is only testing 
// gulp.task('welcome-message',function(){
//     return console.log('hello-world');
// });

//========== it is use to create copy file
// gulp.task('css-file', function(){
//     return gulp.src('src/css/*.css')
//       .pipe(gulp.dest('dist/css'))
//    });

//======== checking error function  
function errorLog(){
    console.error.bind(error)
    this.emit("end");
}


//****==== Compile sass ===*** *//

gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
    .pipe(sourcemaps.init())//source map
      .pipe(sass())// extra it is show the error on sass
      .pipe(autoprefixer({//auto add webkit and other hacks
        browsers: ['last 2 versions'],
        cascade: false
    }))
    //  .on("error", errorLog)// this is use to find error on our code (short with fucntion)
      //on("error", console.error.bind(console))// this is use to find error on our code (long without fucntion)
      .pipe(plumber())// its use show your small mistakes and show which type of error and line number
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./publics/css'));
      //.pipe(livereload());
  });

//****==== uglify js ===****//
gulp.task('uglify-js', function(){
    return gulp.src('./publics/js/custom.js')
      .pipe(plumber())// its use show your small mistakes and show which type of error and line number
      .pipe(uglify())
      .pipe(gulp.dest('./publics/js/'))
  });

//****==== minify css ===****//
  gulp.task('minify-css', () => {
    return gulp.src('./publics/css/*.css')
      .pipe(plumber())// its use show your small mistakes and show which type of error and line number
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./publics/css'));
  });


//****==== concat js ===****//
	gulp.task('contact-js', function() {
        return gulp.src('./src/js/*.js')
        .pipe(sourcemaps.init())//source map
          .pipe(concat('main.js'))
          .pipe(uglify())// it is use minfy all js file
          .pipe(sourcemaps.write())
          .pipe(gulp.dest('./publics/js'))
      });

//****==== imagemin minfy all image on folder ===****//
//gulp.task('image-min', function(){
//    return gulp.src('./publics/images/*')
//            .pipe(svgmin())
//              .pipe(imagemin({interlaced: true,progressive: true,
//              //optimizationLevel: 5,
//              //svgoPlugins: [{removeViewBox: true}]
//          }))
//      .pipe(gulp.dest('publics/images'))
//  });
  

//****==== watch function start here it is use automatic code run ===****//
gulp.task('watch', function(){
    gulp.watch('./src/js/*.js',['contact-js']);
    gulp.watch('./src/scss/*.scss',['sass']);
});

//****====  browerSync start here is atuo brower change show ===****//

gulp.task('browser-sync', ['sass'],function() {
		browserSync.init({
			proxy: "http://localhost/angularjs-app/"
		});
		gulp.watch("../*.html").on('change', browserSync.reload);
		gulp.watch("src/scss/*.scss", ['sass']);
	});

//****==== default Task and fucntion   it is use code by run single command ===****//

// To be run locally with `gulp`
gulp.task('default', ['browser-sync','watch','sass','uglify-js','contact-js','minify-css']);

//// To be run on server with `gulp deploy`
//gulp.task('deploy', ['sass','uglify-js','contact-js','minify-css','image-min']); 