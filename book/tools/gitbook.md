#### 关于 GitBook
[GitBook](https://www.gitbook.com/) 是文档书籍撰写工具. 可以将你的书输出很多格式: PDF、ePub、mobi、或者输出为静态网页(HTML)  
> 使用场景:  
> - 搭建内部文档平台, 用于内部资料共享  
> - 发表开源的电子书, 在互联网上共享自己的知识  

#### 编写和管理的三种方式
1. [在线管理](https://www.gitbook.com/)  
2. [桌面编辑器](https://legacy.gitbook.com/editor)   
3. [GitBook命令行管理](https://github.com/GitbookIO/gitbook)  

--------------------

#### GitBook命令行管理(安装、更新、卸载)
> - 先安装[安装Node.js](https://nodejs.org/en/)  
> - 安装GitBook  

```TEXT
使用 NPM 安装 GitBook 的命令行工具
npm install gitbook-cli -g

安装完成后查看 GitBook 的版本
gitbook --version 或 gitbook -V
// 输出
CLI version: 2.3.2
GitBook version: 3.2.3

更新 GitBook 版本
npm update gitbook-cli -g

卸载 GitBook 命令
npm uninstall gitbook-cli -g
```

##### GitBook 基本命令的使用
> 基本命令行命令  

```TEXT
查看 GitBook 被安装到那里
which gitbook

创建文件夹 并且(&&) 进入到文件夹里
makdir 文件夹名称 && cd 文件夹名称
```

初始化 gitbook 工作目录  
gitbook init  
成功后文件夹中会生成两个 .md 格式的文件  
README.md - 项目的介绍文件  
SUMMARY.md - gitbook 的目录结构在这里配置  

#### 词汇表文件
词汇表文件, 默认对应的文件是 GLOSSARY.md . 该文件主要存储词汇信息, 如果在其他页面中出现了该文件中的词汇, 鼠标放在词汇上会给出词汇示意, 如果点击则进入词汇文件.  
> 示意:  
> \## Git
> 分散式版本控制软件(词汇描述) 


预览书籍  
```TEXT
使用以下命令运行一个服务器, 可以通过 http://localhost:4000/ 预览书籍
gitbook serve
运行后在文件中生成一个 _book 的文件夹, 服务器停止文件夹消失.
```

生成图书, 不开启服务器  
```TEXT
使用一下命令生成图书, 在当前目录下生成默认的 _book 文件夹
gitbook build 
也可以指定某本图书, 生成到某个文件夹
gitbook build 图书目录 输出目录
```


##### GitBook 配置 book.json
```JSON
{
	"title": "Gitbook 设置标题",
	"author": "作者",
	"description": "描述-记录Gitbook的配置和一些插件的使用",
	"language": "zh-hans", // 配置使用健体中文
	"gitbook": ">=3.0.0", // 3.2.3 指定使用的gitbook的版本
	"links": {
		// 在左侧导航栏添加链接信息
		"sidebar": {
			"Home": "http://yuxi0530.github.com"
		}
	},
	// 配置自定义样式
	"styles": {
		"website": "styles/website.css",
		"ebook": "styles/ebook.css",
		"pdf": "styles/pdf.css",
		"mobi": "styles/mobi.css",
		"epub": "styles/epub.css"
	},
	// 配置使用的插件
	"plugins": [
		"disqus",
		"-search" // 去除自带的插件, 在插件名前加 -
	],
	// 配置插件的属性
	"pluginsConfig": {
		"fontsettings": {
			"temem": "sepia",
			"family": "serif",
			"size": 1
		}
	},
	// 指定readme(项目描述)、summary(目录结构配置)、glossary(词汇表)、languages对应的文件名
	"structure": {
		"readme": "bookdes.md"
	}
}
```

#### 插件  
添加新插件之后需要运行 gitbook install [插件名] 来安装新的插件  
Gitbook默认的5个插件  
- highlight (代码高亮)
- search (搜索)
- sharing (分享)
- font-settings (字体设置)
- livereload (自动刷新)

```TEXT
去除自带的插件
"plugins": [
	"-search"
]
```

#### 参考资料
* [官方GitHub](https://github.com/GitbookIO/gitbook)
* [配置说明](http://gitbook.zhangjikai.com/structure.html)
* [精选文档](https://www.kancloud.cn/xiaoyulive/gitbook/506288)
* [简明教程](http://www.chengweiyang.cn/gitbook/index.html)
* [GitBook文档](https://chrisniael.gitbooks.io/gitbook-documentation/content/index.html)

