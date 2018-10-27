#### HTML规范
好的习惯, 让你变的简单!  

#### 结构(HTML)、样式(CSS)、行为(JS)三者分离, 避免内联
- 使用 link 将 css 文件引入, 并置于 head 中.
- 使用 script 将 js 文件引入, 并置于 body 底部.

#### 保持良好的简洁的树形结构
- 每一个块级元素都另起一行, 每一行都使用缩进对齐(head和body的第一层子元素不需要缩进). 删除行尾的多余空格
- 使用4个空格代替1个Tab(编辑器中可设置)
- 可以在大的模块之间用空格隔开, 使得模块更清晰
- 模块开始和结束都应标有注释, 如内部用空格隔开, 则可以不填结束注释  

```HTML
<!DOCTYPE html>
<html>
    <head>
    <title>缩进-保持代码整洁</title>
    </head>
    <body>
    <!-- 侧栏内容区 -->
    <div class="m-side">
        <div class="side">
            <!-- 热门标签 -->
            <div class="side-tag">
                <div class="m-hd3"><h3>热门标签</h3></div>
                ...
            </div>

            <!-- 最热TOP5 -->
            <div class="side-top">
                <div class="m-hd3"><h3>最热TOP5</h3></div>
                ...
            </div>
        </div>
    </div>
    <!-- / 侧栏内容区 -->
    </body>
</html>
```

#### 标签规范
- 在属性上, 使用双引号, 不要使用单引号
- 属性名全小写, 用中划线做分隔符
- 标签的自定义属性以 data- 开头, 如: &lt;p data-num="20">&lt;/p>
- 禁止使用ID来定义元素样式, 除非有特定的功能或组件要求.
- 标签必须合法切闭合、嵌套正确, 标签名需小写  

```HTML
<!-- Not well (标签名、属性名应全小写, 属性值应使用双引号) -->
<INPUT id="keyword" TYPE='text' placeholder='请输入关键字' />

<!-- Not well 自定义属性以 data- 开头 -->
<div class="total" number="20">20</div>

<!-- Not well 标签必须合法闭合、嵌套正确 -->
<div class="bar"><li>分类</li></div>
```

标签上引用的className不要过多, 越少越好  

```HTML
<!-- Not well 引用过多 -->
<div class="class1 class2 class3 class4 class5"></div>

<!-- Good -->
<div class="plate ify"></div>
```

对于一个语义化的内部标签, 应尽量避免使用className  

```HTML
<!-- 应该去除strong标签上的class, 如果需要修饰, 可以直接使用css标签选择器选择 -->
<div class="plate"><strong class="collection">收藏</strong></div>
```

#### 减少标签数量(尽量避免多余的父节点)
结构上如果可以并列书写, 就不要嵌套  

```HTML
<!-- 如果可以写成 (并列) -->
<div>只是蝴蝶</div>
<div>不愿意</div>
<!-- 那么就不要写成 (嵌套) -->
<div>
    只是蝴蝶
    <div>不愿意</div>
</div>
```

如果结构已经可以满足视觉和语义的要求, 那么就不要有额外的冗余的结构  
```HTML
<!-- 已经能满足要求 -->
<img class="avatar" src="..." width="20" height="20" alt="text" />

<!-- Not well -->
<span class="avatar">
    <img src="..." width="20" height="20" alt="text" />
</span>
```
#### 代码本身的注释方法
```HTML
<!-- 单行代码的注释也保持同行, 两端空格; -->
<!-- <h1 class="m-logo">><a href="#>LOGO</a></h1> -->

<!-- 多行代码的注释起始和结束都另起一行并左缩进对齐 -->
<!-- 
<ul class="m-nav">
    <li><a href="#">index</a></li>
    <li><a href="#">News</a></li>
</ul>
-->
```

#### 常用的标签
<table style="font-size:12px;text-align:left;font-family: Consolas,'Liberation Mono',Menlo,Courier,monospace;">  
    <tbody>
        <tr style="background:#f8f8f8;">
            <th width="150">标签</th>
            <th width="160">语义</th>
            <th width="160" style="color: #f60;">嵌套常见错误</th>
            <th>常用属性（加粗的为不可缺少的或建议的）</th>
        </tr>
        <tr>
            <td>&lt;a&gt;&lt;/a&gt;</td>
            <td>超链接/锚</td>
            <td>a不可嵌套a</td>
            <td>href,name,title,rel,target</td>
        </tr>
        <tr>
            <td>&lt;br /&gt;</td>
            <td>换行</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;button&gt;&lt;/button&gt;</td>
            <td>按钮</td>
            <td>不可嵌套表单元素</td>
            <td>type,disabled</td>
        </tr>
        <tr>
            <td>&lt;dd&gt;&lt;/dd&gt;</td>
            <td>定义列表中的定义（描述内容）</td>
            <td>只能以dl为父容器，对应一个dt</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;del&gt;&lt;/del&gt;</td>
            <td>文本删除</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;div&gt;&lt;/div&gt;</td>
            <td>块级容器</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;dl&gt;&lt;/dl&gt;</td>
            <td>定义列表</td>
            <td>只能嵌套dt和dd</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;dt&gt;&lt;/dt&gt;</td>
            <td>定义列表中的定义术语</td>
            <td>只能以dl为父容器，对应多个dd</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;em&gt;&lt;/em&gt;</td>
            <td>强调文本</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;form&gt;&lt;/form&gt;</td>
            <td>表单</td>
            <td>&nbsp;</td>
            <td><em>action</em>,target,method,name</td>
        </tr>
        <tr>
            <td>&lt;h1&gt;&lt;/h1&gt;</td>
            <td>标题</td>
            <td>从h1到h6，不可嵌套块级元素</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;iframe&gt;&lt;/iframe&gt;</td>
            <td>内嵌一个网页</td>
            <td>&nbsp;</td>
            <td>frameborder,width,height,<br />src,scrolling,name</td>
        </tr>
        <tr>
            <td>&lt;img /&gt;</td>
            <td>图像</td>
            <td>&nbsp;</td>
            <td><em>alt</em>,src,width,height</td>
        </tr>
        <tr>
            <td>&lt;input /&gt;</td>
            <td>各种表单控件</td>
            <td>&nbsp;</td>
            <td><em>type</em>,name,value,checked,disabled,<br />maxlength,readonly,accesskey</td>
        </tr>
        <tr>
            <td>&lt;label&gt;&lt;/label&gt;</td>
            <td>标签为input元素定义标注</td>
            <td>&nbsp;</td>
            <td>for</td>
        </tr>
        <tr>
            <td>&lt;li&gt;&lt;/li&gt;</td>
            <td>列表项</td>
            <td>只能以ul或ol为父容器</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;link /&gt;</td>
            <td>引用样式或icon</td>
            <td>不可嵌套任何元素</td>
            <td><em>type,rel</em>,href</td>
        </tr>
        <tr>
            <td>&lt;meta /&gt;</td>
            <td>文档信息</td>
            <td>只用于head</td>
            <td>content,http-equiv,name</td>
        </tr>
        <tr>
            <td>&lt;ol&gt;&lt;/ol&gt;</td>
            <td>有序列表</td>
            <td>只能嵌套li</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;option&gt;&lt;/option&gt;</td>
            <td>select中的一个选项</td>
            <td>仅用于select</td>
            <td><em>value</em>,selected,disabled</td>
        </tr>
        <tr>
            <td>&lt;p&gt;&lt;/p&gt;</td>
            <td>段落</td>
            <td>不能嵌套块级元素</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;script&gt;&lt;/script&gt;</td>
            <td>引用脚本</td>
            <td>不可嵌套任何元素</td>
            <td><em>type</em>,src</td>
        </tr>
        <tr>
            <td>&lt;select&gt;&lt;/select&gt;</td>
            <td>列表框或下拉框</td>
            <td>只能嵌套option或optgroup</td>
            <td>name,disabled,multiple</td>
        </tr>
        <tr>
            <td>&lt;span&gt;&lt;/span&gt;</td>
            <td>内联容器</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;strong&gt;&lt;/strong&gt;</td>
            <td>强调文本</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;style&gt;&lt;/style&gt;</td>
            <td>引用样式</td>
            <td>不可嵌套任何元素</td>
            <td><em>type</em>,media</td>
        </tr>
        <tr>
            <td>&lt;sub&gt;&lt;/sub&gt;</td>
            <td>下标</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;sup&gt;&lt;/sup&gt;</td>
            <td>上标</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;table&gt;&lt;/table&gt;</td>
            <td>表格</td>
            <td>只可嵌套表格元素</td>
            <td>width,align,background,cellpadding,<br />cellspacing,summary,border</td>
        </tr>
        <tr>
            <td>&lt;tbody&gt;&lt;/tbody&gt;</td>
            <td>表格主体</td>
            <td>只用于table</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;td&gt;&lt;/td&gt;</td>
            <td>表格中的单元格</td>
            <td>只用于tr</td>
            <td>colspan,rowspan</td>
        </tr>
        <tr>
            <td>&lt;textarea&gt;&lt;/textarea&gt;</td>
            <td>多行文本输入控件</td>
            <td>&nbsp;</td>
            <td>name,accesskey,disabled,<br />readonly,rows,cols</td>
        </tr>
        <tr>
            <td>&lt;tfoot&gt;&lt;/tfoot&gt;</td>
            <td>表格表尾</td>
            <td>只用于table</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;th&gt;&lt;/th&gt;</td>
            <td>表格中的标题单元格</td>
            <td>只用于tr</td>
            <td>colspan,rowspan</td>
        </tr>
        <tr>
            <td>&lt;thead&gt;&lt;/thead&gt;</td>
            <td>表格表头</td>
            <td>只用于table</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;title&gt;&lt;/title&gt;</td>
            <td>文档标题</td>
            <td>只用于head</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;tr&gt;&lt;/tr&gt;</td>
            <td>表格行</td>
            <td>嵌套于table或thead、tbody、tfoot</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&lt;ul&gt;&lt;/ul&gt;</td>
            <td>无序列表</td>
            <td>只能嵌套li</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
</table>

#### 以实体代替与HTML语法相同的字符，避免浏览解析错误
<table style="font-size:12px;text-align:left;font-family: Consolas,'Liberation Mono',Menlo,Courier,monospace;">  
    <tbody>
        <tr style="background:#f8f8f8;"> 
            <th>字符</th>
            <th>名称</th>
            <th>实体名</th>
            <th>实体数</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>"</td>
            <td>双引号</td>
            <td>&amp;quot;</td>
            <td>&amp;#34;</td>
        </tr>
        <tr>
            <td>&amp;</td>
            <td>&amp;符</td>
            <td>&amp;amp;</td>
            <td>&amp;#38;</td>
        </tr>
        <tr>
            <td>&lt;</td>
            <td>左尖括号（小于号）</td>
            <td>&amp;lt;</td>
            <td>&amp;#60;</td>
        </tr>
        <tr>
            <td>&gt;</td>
            <td>右尖括号（大于号）</td>
            <td>&amp;gt;</td>
            <td>&amp;#62;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>空格</td>
            <td>&amp;nbsp;</td>
            <td>&amp;#160;</td>
        </tr>
        <tr>
            <td>　</td>
            <td>中文全角空格</td>
            <td>&nbsp;</td>
            <td>&amp;#12288;</td>
        </tr>
    </tbody>
</table>

#### 常用特殊字符
<table style="font-size:12px;text-align:left;font-family: Consolas,'Liberation Mono',Menlo,Courier,monospace;">  
    <tbody>
        <tr style="background:#f8f8f8;"> 
            <th>字符</th>
            <th>名称</th>
            <th>实体名</th>
            <th>实体数</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>¥</td>
            <td>元</td>
            <td>&amp;yen;</td>
            <td>&amp;#165;</td>
        </tr>
        <tr>
            <td>¦</td>
            <td>断竖线</td>
            <td>&amp;brvbar;</td>
            <td>&amp;#166;</td>
        </tr>
        <tr>
            <td>©</td>
            <td>版权</td>
            <td>&amp;copy;</td>
            <td>&amp;#169;</td>
        </tr>
        <tr>
            <td>®</td>
            <td>注册商标R</td>
            <td>&amp;reg;</td>
            <td>&amp;#174;</td>
        </tr>
        <tr>
            <td>™</td>
            <td>商标TM</td>
            <td>&amp;trade;</td>
            <td>&amp;#8482;</td>
        </tr>
        <tr>
            <td>·</td>
            <td>间隔符</td>
            <td>&amp;middot;</td>
            <td>&amp;#183;</td>
        </tr>
        <tr>
            <td>«</td>
            <td>左双尖括号</td>
            <td>&amp;laquo;</td>
            <td>&amp;#171;</td>
        </tr>
        <tr>
            <td>»</td>
            <td>右双尖括号</td>
            <td>&amp;raquo;</td>
            <td>&amp;#187;</td>
        </tr>
        <tr>
            <td>°</td>
            <td>度</td>
            <td>&amp;deg;</td>
            <td>&amp;#176;</td>
        </tr>
        <tr>
            <td>×</td>
            <td>乘</td>
            <td>&amp;times;</td>
            <td>&amp;#215;</td>
        </tr>
        <tr>
            <td>÷</td>
            <td>除</td>
            <td>&amp;divide;</td>
            <td>&amp;#247;</td>
        </tr>
        <tr>
            <td>‰</td>
            <td>千分比</td>
            <td>&amp;permil;</td>
            <td>&amp;#8240;</td>
        </tr>
    </tbody>
</table>












