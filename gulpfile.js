const config = {
        src: "src",
        page: "pages",
        style: "style",
        dest: "dist"
    }, // 文件路径配置
    gulp = require('gulp'), // gulp 引入
    $ = require('gulp-load-plugins')(),    //这样的话 其他的模块可以直接使用 $ 符号来引入
    open = require('open'),
    webpack = require('webpack-stream'),// 打包js的import
    named = require('vinyl-named'), // 打包时，不重命名js
    webpackCongfig = require('./webpack.config.js');

function errrHandler(e) {
    // 控制台发声,错误时beep一下
    $.gutil.beep();
    $.gutil.log(e);
    this.emit('end');
}

// 编译scss
gulp.task('scss', () => {
    return gulp.src(config.style + '/*.scss')
        .pipe($.sass({style: 'expanded'})) // 编译scss
        .pipe($.autoprefixer({
            browsers: ['last 2 versions'],      // 浏览器版本
            cascade: true,                     // 美化属性，默认true
            add: true,                    // 是否添加前缀，默认true
            remove: true,                   // 删除过时前缀，默认true
            flexbox: true,                   // 为flexbox属性添加前缀，默认true
        })) // 编译scss
        // .pipe($.cleanCss()) // 压缩
        .pipe($.plumber({errorHandler: errrHandler})) // 检查错误，防止出错的时候，奔溃
        .pipe(gulp.dest(config.dest + '/css'))
        .pipe($.connect.reload());
});

// 编译js
gulp.task('script', () => {
    return gulp.src(config.src + '/*.js')
        .pipe(named()) // 不改变js名字
        // 如果是自定义配置,则直接引入.pipe(webpack(webpackCongfig ))
        // 下面写法是默认，默认是打包之后进行压缩了
        .pipe(webpack())
        // .pipe($.babel({
        //     presets: ['env'] //编译模板，必须配置，否则不会编译成es5或其他的版本
        // }))
        // .pipe($.uglify()) // 压缩
        .pipe($.plumber({errorHandler: errrHandler})) // 检查错误，
        // 防止出错的时候，奔溃
        .pipe(gulp.dest(config.dest + '/js'))
        .pipe($.connect.reload());
});

//将 html 拷贝到 devPath prdPath中
gulp.task('html', () => {
    return gulp.src(config.page + '/*.html')
        .pipe($.htmlmin({
            removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS
        })) // 压缩去掉空格
        .pipe($.plumber({errorHandler: errrHandler})) // 检查错误，防止出错的时候，奔溃
        .pipe(gulp.dest(config.dest))
        .pipe($.connect.reload());
});

// 监听任务
gulp.task('watch', () => {
    gulp.watch(config.style + '/*.scss', gulp.series('scss')).on('change', function (ev) {
        console.log('File ' + ev.path + ' was ' + ev.type + ', running tasks...')
    });
    gulp.watch(config.src + '/*.js', gulp.series('script')).on('change', function (ev) {
        console.log('File ' + ev.path + ' was ' + ev.type + ', running tasks...')
    });
    gulp.watch(config.page + '/*.html', gulp.series('html')).on('change', function (ev) {
        console.log('File ' + ev.path + ' was ' + ev.type + ', running tasks...')
    });
});

gulp.task("build", gulp.series('scss', 'script', 'html'));

// 启动服务
gulp.task('serve', () => {
    $.connect.server({
        root: config.dest,        //服务起来的入口
        livereload: true,        //文件更改后自动刷新页面
        port: 8081        //端口号
    });
    //自动打开浏览器
    open('http://localhost:8081');
});

// 并列执行gulp.parallel(taskA,taskB...)
// 顺序执行gulp.series(taskA,taskB...)
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve'))); // 默认执行任务

