#### 页面基础CODE
```html
<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="utf-8" />
    <title>标题-思考让你变的不凡</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="keywords" content="关键字,以英文半角逗号隔开" />
    <meta name="description" content="页面描述-不超过150个字符,描述内容和页面内容相关" />
    <!-- 移动端 - 相关META标签设置 -->
    <!-- 设置视窗的大小-比例-是否可以缩放 -->
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />

    <!-- 自定义图标 -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> 
    <!-- 引入CSS文件 -->
    <link rel="stylesheet" href="CSS文件路径" />
</head>
<body>
    <!-- 内容区 -->

    <!-- 公共页脚 -->
    <script src="/common/footer.js"></script>
    <!-- 统计代码 -->
    <script src="xxx.js"></script>
</body>
</html>
```

#### 文档类型统一使用 HTML5 的doctype  
> <!DOCTYPE html>

#### 页面编码
> 必须声明文档的编码 charset, 推荐使用 UTF-8 编码  
> &lt;meta charset="utf-8" />

#### SEO优化部分

###### 页面标题 ( title 标签 )  一般不超过80个字符
1. "网站名称-主关键词或一句含有主关键词的描述"
2. "栏目名称(最好用关键字)-网站名称"
3. "分类列表页名称-栏目名称-网站名称"
4. "文章标题-栏目名称-网站名称"  
> &lt;title>到店付周末送大礼 - 云知官方网站 - 云知集团&lt;/title>

###### 页面关键字 (Keywords)
关键字为，产品名、专题名、相关名词，之间用英文半角逗号隔开  

> &lt;meta name="keywords" content="页面关键字" />

###### 页面描述
不超过150个字符，描述内容和页面内容相关

> &lt;meta name="description" content="页面描述" />

###### 自定义图标
该图标显示在浏览器Tab标题的左侧,以更加明显的标识网站  
- 图标必须放在根目录下
- 支持图像格式ico、png、gif,常用尺寸是16*16、32*32也可以是64*64、128*128

```html
ICO图像, 对应的type="image/x-icon"
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> 
PNG图像, 对应的type="image/png"
<link rel="shortcut icon" href="favicon.png" type="image/png" /> 
GIF图像, 对应的type="image/gif"
<link rel="shortcut icon" href="favicon.gif" type="image/gif" /> 
```

#### 区分不同设备

通过JS来区分是桌面(PC)端还是移动端, 然后做不同的处理.
```javascript
var reg = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;
if ( reg.test(navigator.userAgent) ) {
    // 当前是移动设备访问
} else {
    // 当前是桌面端访问
}
```

#### 参考资料
[网易NEC](http://nec.netease.com/standard)  
[腾讯QQ](https://tgideas.qq.com/doc/frontend/)  
[baidu](https://github.com/ecomfe/spec)  
[alloyteam](http://alloyteam.github.io/CodeGuide/?utm_source=qdan.me#css)  
[HTML-CSS](https://codeguide.bootcss.com/)













