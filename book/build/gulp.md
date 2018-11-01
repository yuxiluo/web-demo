#### 构建工具Gulp、Webpack
> 构建工具的主要功能就是实现自动化处理, 例如对代码进行检查、预编译、合并、压缩; 生成雪碧图、sourceMap、版本管理; 运行单元测试、控制等   

#### 任务运行工具Gulp
**全局安装gulp**  
```JavaScript
npm install --global gulp   
gulp -v 查看版本  
```

**作为项目的开发依赖(devDependencies)安装**
npm install --save-dev gulp  

**项目根目录package.json文件(json文件内是不能写注释)**  
```JavaScript
{
    "name": "项目名称-必须",
    "version": "项目版本-必须", 
    "description": "项目描述", 
    "devDependencies": { // 项目依赖的插件
        "gulp": "^3.8.11",
        "gulp-less": "^3.0.0"
    }
}  
// 通过命令npm init新建配置文件package.json   
```

**安装gulp的插件**  
npm install gulp-jshint --save-dev 安装单个插件   
npm install gulp-jshint gulp-concat gulp-uglify --save-dev 安装多个插件    
可以批量安装package.json文件中的项目依赖文件 npm install  

**在项目根目录下创建一个名为gulpfile.js文件**  
```JavaScript
var gulp = require('gulp);
gulp.task('default', function() {
    // 默认的任务代码
});
```

#### Gulp Api
**gulp.src(globs[, options]) 指定需要处理的源文件**
> js/app.js: 指定具体文件
> js/\*.js: 某个目录下所有后缀名为js的文件  
> js/\*\*/\*.js: 某个目录及其所有子目录中的所有后缀为js的文件  
> !js/app.js: 除了js/app.js以外的所有文件  
> \*.+(js|css): 匹配项目根目录下, 所有后缀名为js或css的文件  
> {}: 匹配多个属性, {a,b}.js(包含a.js和b.js), src/\*.{jpg,png,gif}(src下的所有jpg、png、gif文件) 

> src方法的参数可以是一个数组, 选择多个文件  
> gulp.src(['./js/*.js', './sass/*.scss']);  

options: 可选参数   
options.buffer: Boolean 默认 true   
options.read: Boolean 默认 true 设置为false 不执行读取文件操作, 返回null  
options.base: String 设置输出路径以某个路径的某个组成部分为基础向后拼接  
```JavaScript
gulp.src('client/js/**/*.js)
    .pipe(minify())
    .pipe(gulp.dest('build'));
    // 'build/somedir/somefile.js

// 指定拼接路径
gulp.src('client/js/**/*.js)
    .pipe(minify())
    .pipe(gulp.dest('build'));
    // 'build/js/somedir/somefile.js
```

**gulp.dest(path[, options]) 指定处理完成后文件输出的路径**
> options.cwd(): 前脚本的工作目录的路径, 当文件输出路径为相对路径将会用到  
> options.mode: 默认 0777 指定被创建文件夹的权限  

**gulp.task(name[, deps], fn)定义一个gulp任务**
> name: String 指定任务名称(不应该有空格)  
> deps: StringArray 该任务依赖的任务
> fn: Function 该任务调用的插件操作

```JavaScript   
gulp.task('任务名称', ['array', 'names'], function() {
    // name: 任务名称
    // deps: 任务列表的数组, 这些任务会在当前任务运行之前完成
}); 
```

**gulp.watch(glob[,options], tasks)监听文件**



**gulp.pipe() 管道为每个任务的连接**  
.pipe()为每个任务的连接, 执行完一个任务之后, 再次连接执行下一个任务  
```JavaScript
.pipe(minifycss())  // 压缩CSS
.pipe(gulp.dest(path.dist.css));  // 发布到线上
```

#### glob格式匹配规则
- \* 匹配任意 0 或多个任意字符  
- ? 匹配任意一个字符
- [...] 匹配括号中的字符. 若以!或^开头, 不匹配括号中的字符.  
- !(a|b|c) 不匹配括号中的所有匹配模式
- ?(a|b|c) 满足0或1个括号中的匹配模式
- +(a|b|c) 满足1个或多个括号中的匹配模式 
- *(a|b|c) 满足0个或多个括号中的匹配模式
- @(a|b|c) 满足1个括号中的模式匹配  
- \** 匹配0个或多个子文件夹

















#### Gulp插件
**gulp-rename 文件重命名**
```JavaScript
// 1. 安装插件 
npm install gulp-rename --save-dev

// 2. 在任务gulpfile.js中引入插件 
var rename = require("gulp-rename");

// 重命名参数 - 字符串形式
gulp.src("./src/main/text/hello.txt")
    .pipe(rename("main/text/ciao/goodbye.md"))
    .pipe(gulp.dest("./dist"));
    // './dist/main/text/ciao/goodbye.md'

// 重命名参数 - 函数的形式
gulp.src("./src/**/hello.txt")
    .pipe(rename(function(path) {
        path.dirname += "/ciao"; // 目录名
        path.basename += "-goodbye"; // 文件基础名称
        path.extname = ".md"; // 文件扩展名
    }))
    .pipe(gulp.dest("./dist"));
    // './dist/main/text/ciao/hello-goodbye.md'

// 重命名参数 - 为JSON对象 
gulp.src("./src/main/text/hello.txt", { base: process.cwd() })
    .pipe(rename({
        dirname: "main/text/ciao",
        basename: "aloha", // 文件基础名
        prefix: "wx-", // 文件名前缀
        suffix: "-hola", // 文件名后缀
        extname: ".md"
    }))
    .pipe(gulp.dest("./dist"));
    // './dist/main/text/ciao/wx-aloha-hola.md'
```

**gulp-rev 对文件进行hash命名, 并生成对应的json文件**
```JavaScript
// 1. 安装插件 
npm install gulp-rev --save-dev

// 2. 在任务gulpfile.js中引入插件 
var rev = require('gulp-rev');

gulp.task('rev', function() {
    gulp.src(['css/*.css', 'js/*.js])
        .pipe( rev() ) // 对文件进行hash命名
        .pipe( gulp.dest('./bulid') )
        .pipe( rev.manifest() ) // 生成对应的json文件
        .pipe( gulp.dest('./bulid'));
        // 会生成一个rev-manifest.json的文件
});
```

**gulp-rev-collector 结合gulp-rev对hash的文件在其他文件中进行引用路径更改**
```JavaScript
// 1. 安装插件 
npm install glp-rev-collector

// 2. 在任务gulpfile.js中引入插件 
var revCollector = require('gulp-rev-collector');

gulp.task('revCollector', function() {
    gulp.src(['rev/**/*.json', 'www/**/*.html'])
        .pipe(revCollector({
            replaceReved: true // 说明模版中已经被替换的文件是否还能再被替换
        }))
        .pipe(gulp.dest('build'));
});

// 相对路径会出现问题, 写路径的时候必须从根目录开始
```

**gulp-uglify JS压缩丑化**
```JavaScript
// 1. 安装插件
npm install gulp-uglify --save-dev

// 2. 在任务gulpfile.js中引入插件 
var uglify = require('gulp-uglify');

gulp.task('gulify', function() {
    gulp.src(['build/**/*.js', '!build/doc/**/*.js])
        .pipe( uglify({
            mangle: true // Boolean 默认: true 修改变量, false 不修改变量
        }) )
        .pipe( gulp.dest('build') );
});
```

**gulp-clean-css 压缩CSS文件**
```JavaScript
// 压缩CSS文件, 减少文件大小. (gulp-minify-css已被废弃)
// 注释 /*!**/ 开头有!的不会被删除

// 1. 安装插件
npm install gulp-clean-css --save-dev

// 2. 在任务gulpfile.js中引入插件 
var cssmin = require('gulp-clean-css');

gulp.task('cssmin', function() {
    gulp.src(['build/**/*.css', '!bulid/**/reset.css])
        .pipe( cssmin({
            compatibility: 'ie7' // 保留ie7及以下兼容写法
        }) )
        .pipe( gulp.dest('build') );
});
```

**gulp-htmlmin 压缩HTML文件**
```JavaScript
// 可以压缩页面上的javascript、css, 去除页面空格、注释、删除多余属性等操作

// 1. 安装插件
npm install gulp-htmlmin --save-dev

// 2. 在任务gulpfile.js中引入插件
var htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin', function() {
    return gulp.src('build/**/*.html')
        .pipe( htmlmin({
            removeComments: true, // 清除HTML注释
            collapseWhitespace: true, // 压缩HTML
            collapseBooleanAttributes: true, // 省略布尔属性的值 <input checked="true" /> => <input />
            removeEmptyAttributes: true, // 删除所有空格作属性值 <input id="" /> => <input />
            removeScriptTypeAttributes: true, // 删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true, // 删除<style>和<link>的type="text/css"
            minifyJS: true, // 压缩页面JS
            minifyCSS: true // 压缩页面CSS
        }) )
        .pipe( gulp.dast('build') );
});
```

**gulp-sequence 按顺序逐个同步地运行任务**
```JavaScript
// task 任务里必须加上return, 不然还是会异步执行;

// 1. 安装插件
npm install gulp-sequence --save-dev

// 2. 在任务gulpfile.js中引入插件 
var sequence = require('gulp-sequence');

// 任务A
gulp.task('A', function(cd) {
    return cd();
});

// 任务B
gulp.task('B', function(cd) {
    return cd();
});

// 任务C
gulp.task('C', function(cd) {
    return cd();
});

// 任务D
gulp.task('D', function(cd) {
    return cd();
});

// 任务E
gulp.task('E', function(cd) {
    return cd();
});

// sequence方法中的[]表示并行(异步)执行的任务
// 用法1
gulp.task('sequence-1', sequence(['A', 'B'], 'C', ['D', 'E']));
// 'A'和'B'并行运行, 完成之后运行'C'任务, 在'C'任务完成之后并行运行'D'和'E'任务

// 用法2
gulp.task('sequence-2', function(cd) {
    sequence(['A', 'B'], 'C', ['D', 'E'], cd);
    // 或
    sequence(['A', 'B'], 'C', ['D', 'E'])(cd);
});

```

**gulp-zip 把文件打成压缩包**
```JavaScript
// 1. 安装插件
npm install gulp-zip --save-dev

// 2. 在任务gulpfile.js中引入插件 
var zip = require('gulp-zip');

gulp.task('zip', function() {
    gulp.src('build/**/*')
        .pipe( zip('build.zip') )
        .pipe( gulp.dest('./') );
});
```






#### 参考资料
[Gulp使用小结](https://www.cnblogs.com/Darren_code/p/gulp.html)
