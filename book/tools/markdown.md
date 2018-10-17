### 什么是MarkDown?
Markdown是一个Web上使用的文本到HTML的转换工具，可以通过简单、易读易写的文本格式生成结构化的HTML文档。[中文地址](http://www.markdown.cn/)  
**免费编辑器**  
[MarkdownPad](http://markdownpad.com/)  

## MarkDown - 语法说明

### 段落
注: 唯一决定两行文字是否是段落的,就在于行文字之间是否有空行。有空行,则代表不同段落。

> 一个阳光明媚的日子，正是杀人越货的好日子
> 
> 有心者有所累，无心者无所谓。

### 换行
注: 必须是在一行字后面空两个空格，并且需要回车。

> 若他爱你，不必讨好；不爱你，更加不必。  
> ——李碧华《只是蝴蝶不愿意》

### 空格
注: 在同一个段落里的多个空格在展示时替换成一个。

> 未来有        你, 才 完美!

------------

### 标题
Markdown支持两种标题的语法, Setext 和 atx形式  
Setext 形式是用底线的形式， 利用= (最高阶标题) 和 - (第二阶标题)

> This is an H1
> =============
>
> This is an H2
> -------------

Atx 形式则是在行首插入 1 到 6 个#，对应标题1 到 6阶  

> # 这是 H1
> ## 这是 H2
> ### 这是 H3
> #### 这是 H4
> ##### 这是 H5
> ###### 这是 H6

------------

### 区块引用

> 区块引用，在每一行的最前面加上 &gt; 可以每一行都加，也可以偷懒只加第一行.
> > 区块引用可以嵌套， 只要根据层次加上不同数量的 &gt;
> 引用的区块内也可以使用其他的MarkDown语法
> ## 标题
> - 每个人的生命中，都有最艰难的那一年，将人生变得美好而辽阔。
> - 有心者有所累，无心者无所谓。

### 列表 (支持有序列表 和 无序列表)
注: 无序列表使用星号(*)、加号(+)、减号(-)作为列表的标记  

> * Red  
> * Green  
> * Blue  

等同于：

> + Red
> + Green
> + Blue

等同于

> - Red
> - Green
> - Blue

有序列表：  
> 1. Red
> 2. Green
> 3. Blue

- - - - - - - - - -

### 代码区块 (缩进4个空格或是1个制表符)
这是一个普通锻炼  

	这是一个代码块

### 分割线  
使用三个以上的星号(*)、减号(-)、底线(_)、中杠线(-)来简历一个分割线，行内不能有其他东西。也可以在星号或是减号中间插入空格。

分隔开和连续的星号 - 都为加粗的分割线  
***
* * * 
- - -
_________
 

### 区块元素

### 链接 (行内式 和 参考式的两种形式)
链接文字都用 [方括号] 来标记  

行内式链接, 在方括号后面紧接着圆括号并插入网址链接即可。给链接添加title文字，只要在网址后面 空一格用双引号把 title 文字抱起来即可。    
This is [an example](http://example.com/ "提示") inline link.


参考式的链接, 在链接文字的括号后面再接上另一个方括号，第二个为识别链接的标记。 
以id为链接标记:  
This is [an example][id] reference-style link. 
[id]: http://example.com/  "Optional Title Here"  

链接辨别标签可以以字母、数字、空白和标点符号，不区分大小写.
> [link text][a]  
> [link text][A]  
> 以上两个链接是一样的
> 
> 参考式链接的范例:  
> [Google][1] or [Yahoo][2] or [MSN][3]
> [1]: http://google.com/ 'Google'
> [2]: http://yahoo.com/  'Yahoo'
> [3]: http://msn.com/    'MSN'

隐式链接标记功能让你可以省略指定链接标记，这种情况标记会视为等同于链接文字。  
> [Google][]
> [Google]: http://google.com "谷歌"

### 强调 (如果* 和 _ 两边有空白的话，只会被当成普通的符号)
Markdown 使用星号(*)和底线(_)作为标记强调字词的符号。  

倾斜：用单个(*)或(_)包围字词，会转成 &lt;em&gt; 标签  
> *MarkDown*  
> _Miss You_   

加粗：用两个(*)或(_)包围字词，会转成 &lt;strong&gt; 标签  
> **MarkDown**  
> __Miss You__

- - -

### 代码 
如果要标记一段行内代码，可以用反引号把它包起来(\`)  
Use the `printf()` function.

如果要在代码区段内插入反引号，可以用多个反引号来开启和结束代码区块.
`` There is literal backtick (`) here. ``

### 图片
> 行内式   
> \!\[Img](https://img.gcall.com/dca2/M00/13/60/wKhoK1m4mJ6EYxhvAAAAAAAAAAA027_48x48.jpg?size=960x960 "际客")  
> 可以写相对地址，无法设置图片大小

![Img](https://img.gcall.com/dca2/M00/13/60/wKhoK1m4mJ6EYxhvAAAAAAAAAAA027_48x48.jpg?size=960x960 "际客")  

> 参考式  
> \!\[Img]\[id]
> id为链接标记, 通过标记可以在某一个地方统一设置图片信息  
> 设置：  
> \[id]: 图片路径 "图片提示文案"

![Img][id]
[id]: https://img.gcall.com/dca2/M00/13/60/wKhoK1m4mJ6EYxhvAAAAAAAAAAA027_48x48.jpg?size=960x960 "ID标识"


### 反斜杠 (转义符)
> \*Miss You\*

Markdown 支持一下这些符号前加上反斜杠来帮助插入普通的符号  
> \   反斜线    
> \`  反引号  
> \*  星号  
> _   底线  
> {}  花括号  
> []  方括号  
> ()  括弧  
> \#  井字号  
> \-  减号  
> \+  加号  
> .   英文句点  
> !   惊叹号

### 自动链接
Markdown 支持以叫简短的自动链接形式来处理网址和电子邮件信箱。  
> &lt;http://example.com/&gt;  
> 
> <http://example.com/>  
> 会转为  
> &lt;a href="http://example.com">http://example.com/&lt;/a>

邮件地址自动链接  
<address@example.com>  
> 会转为  
> &lt;a href="mailto:address@example.com">address@example.com&lt;/a>

### 代码块(代码高亮)
HTML类型  
```HTML
<!-- HTML结构 -->
<div class="wrap">
	HTML代码
</div>
```
 
CSS类型  
```CSS
/* CSS代码 */
.wrap{
    width: 80%;
	padding:0 10%;
	background:#f5f5f5;
}
```

JavaScript类型   
```JavaScript
// JS 脚本
var number = 100;
console.log( number );
```
