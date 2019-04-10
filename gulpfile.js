//gulp的配置文件
var gulp = require("gulp");//加载gulp模块
var connect = require("gulp-connect");//服务器模块
var sass = require("gulp-sass");//将sass文件转换成css文件的模块
var sourcemaps = require('gulp-sourcemaps');//让编译后的文件和源文件的关联的模块
var cleanCss=require("gulp-clean-css");//压缩css
var concat = require("gulp-concat");//合并js
var uglify = require("gulp-uglify");//压缩js
var rename = require("gulp-rename");//重命名
var babel = require("gulp-babel");//es6转es5
//调用gulp的task方法创建任务
//复制根目录下所有的HTML文件到dist文件夹
gulp.task("copyIndex",function(){
    gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
});
//复制根目录img文件夹下png、jpg、gif、jpeg格式的文件到dist文件夹下的img文件夹
gulp.task("copyImg",function(){
    gulp.src("img/*.{png,jpg,gif,jpeg}").pipe(gulp.dest("dist/img"));
});
//复制xml、json到dist/data
gulp.task("copyData",function(){
    gulp.src(["xml/*.xml","json/*.json"]).pipe(gulp.dest("dist/data"));
});
//复制并压缩css文件到dist/css文件夹
gulp.task("copyCss",function(){
    gulp.src("css/*.css")
    .pipe(cleanCss())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
//将scss文件转换为css并在压缩后粘贴到dist/css文件夹
gulp.task("sass",function(){
    gulp.src("sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css")).pipe(connect.reload());
});
//压缩具体文件并重命名后到粘贴到具体目录
gulp.task("uglify",function(){
    gulp.src("jquery-1.11.0.js")
    .pipe(uglify())
    .pipe(rename("jquery.min.js"))
    .pipe(gulp.desk("dist"))
});
//合并js文件并压缩重命名到指定目录
gulp.task("concat",function(){
    gulp.src(["a.js","js/b.js"])
    .pipe(concat("mix.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(uglify())
    .pipe(rename("mix.min.js"))
    .pipe(gulp.dest("dist/js"));
});
//将js文件从es6转换为es5并压缩
gulp.task("babel",function(){
    gulp.src("js/*.js")
    .pipe(babel({presets:["es2015"]}))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload())
})
//开启服务器
gulp.task('server',function(){ 
    connect.server({
        root:'dist',
        livereload:true
        });
})  
//运行默认执行程序，此处默认执行服务器和监听两个程序
gulp.task("default",["server","watch"]);

//监听，下面文件夹中的文件稍有异动便执行后面的程序
gulp.task("watch",function(){
    gulp.watch("*.html",["copyIndex"]);
    gulp.watch("sass/*.scss",["sass"]);
    gulp.watch("css/*.css",["copyCss"]);
    gulp.watch("js/*.js",["babel"]);
    gulp.watch("img/*.{png,jpg,gif,jpeg}",["copyImg"]);
});