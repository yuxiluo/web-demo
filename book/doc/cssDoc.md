#### CSS文件的分类和引用顺序
> 通常, 一个项目只引用一个CSS, 但是对于较大项目, 需要把CSS文件进行分类.  
> 一般按照性质和用途分类, 将CSS文件分成 "公共型样式"、"特殊型样式"、"皮肤型样式", 以此顺序引用  
1. 公共型样式: 包括"rest.css标签的重置和设置默认值"、"清除浮动\单行省略\水平垂直居中等常用样式"、"网站通用布局"、"元件及扩展"、"功能类样式" 
2. 特殊型样式: 基本上说当前页的主体样式, 一般是差异性比较大、布局特殊无法纳入公共样式中的。 
3. 皮肤型样式: 需要换肤功能时, 需要将颜色、背景等抽离出来放在这里   

```HTML
<!-- 样式引用顺序 -->
<link rel="stylesheet" href="css/global.css" />
<link rel="stylesheet" href="css/index.css" />
<link rel="stylesheet" href="css/skin.css" />
```

#### CSS命名规则及使用
> 注: 使用类选择器, 放弃ID选择器   
> 由于ID在一个页面中的唯一性, 使得以ID选择器写的CSS无法重用.  

###### 分类命名方法 使用单字母+ "-"为前缀
> 布局(grid)        .g-  
> 模块(module)      .m-  
> 元件(unit)        .u-  
> 功能(function)    .f-  
> 皮肤(skin)        .s-
> 状态              .z-
> 事件(特殊类)       .js-   // 专用于JS获取节点, 请勿定义样式

###### 后代选择器的使用
> 使用后代选择器, 不需要考虑命名是否已被使用, 因为只在当前模块或元件中生效, 同样的样式名可以在不同的模块或元件中重复使用, 互不干扰.  
> 后代选择器不需要完整表现结构树层级, 尽量能短则短.  

类选择器为后代选择器时, 不以单字母+"-"为前缀, 且长度必须大于等于2  
```HTML
<!-- .item 只在.m-list中有效 -->
.m-list{ margin: 0; padding: 0; }
.m-list .item{ padding: 1px; }
```

一个语义化的标签为后代选择器时, .m-list li{}  
```HTML
<!-- 结构 -->
<div class="m-list">
    <ul>
        <li>
            <em></em> 小院
        </li>
    </ul>
</div>
<!-- 注意: 在使用标签和给标签添加类时, 尽量精简, 能不加则不加.  -->
```
```CSS
/* CSS */
.m-list li{ 
    /* 只有在需要区分时添加类 */
}
.m-list em{
    /* 层级精简 */
}
```

###### 相同语义的不同类命名
1. 可以直接加数字, 如: .m-list、.m-list2、.m-list3等, 都是列表模块
2. 如果是简单的字母或单词, 如: .m-list-event、.m-list-ad

###### 模块和元件的扩展类的命名方法
> 类型相同且外形相似区别不大的, 把出现率最高的做成基类, 其他做成基类的扩展类.  
> 基类自身可以单独使用(如: class="btn"), 扩展类必须基于基类使用(如: class="btn btn-info")
> 扩展类是表示不同的状态

```HTML
<!-- 以按钮为例 -->
<button class="btn btn-default" type="button">默认样式(Default)</button>
<button class="btn btn-info" type="button">一般信息(Info)</button>
<button class="btn btn-danger" type="button">危险(Danger)</button>
<!-- 
.btn 为基类
.btn-default,.btn-info,.btn-danger 为扩展类 
-->
```

###### 分组选择器有时可以代替扩展方法
有时候虽然两个同类型的模块很相似, 但是你希望他们之间不要有依赖关系, 也就是说不希望使用扩展的方法, 这时可以通过合并选择器来设置共性的样式.  
前提是: 相同类型、功能和外观都相似, 写在同一片代码区域方便维护.  

```CSS
/* 共有样式 */
.u-plate1, .u-plate2{}
.u-plate1 .item, .u-plate2 .item{}

/* plate1 */
.u-plate1 .item{}

/* plate2 */
.u-plate2 .item{}
```

###### 防止污染和被污染
当模块或元件之间相互嵌套时, 且使用了相同的标签选择器或其他后代选择器, 那么里面的选择器就会被外面的选择器所影响.  
所以, 如果你的模块或元件可能嵌套或被嵌套于其他模块或元件, 那么要慎用标签选择器, 必要时采用类选择器, 并注意命名方式.

#### CSS代码注释
良好的注释是非常重要的. 让你的代码更易于读懂.  
注释的风格应当简洁, 并在代码库中保持统一.   
- 将注释放在主题上方并独占一行  
- 控制每行长度在合理的范围内, 比如80个字符

CSS注释示例:  
```CSS
/* ============
   区块代码注释
   ============ */

/* 次级区块代码注释
   ============ */

/**
 * 较长的注释说明从这里开始
 *
 * @tag 这个一个叫做 tag 的标签
 *
 */

/* 一般的注释 */
```

#### CSS代码格式
最终选择的代码分隔必须保证: 易于阅读, 易于清晰地注释  
1. 选择器、属性和值都使用小写  
2. 代码缩进为4个空格
3. 每个属性声明末尾都要加分号(如: margin: 0 10px;)
4. 省略值为0时的单位(如: padding: 5px 0;)
5. 引号: 统一使用双引号(如: content: "";background:url("");input[type="text"])
6. 使用16进制表示颜色值, 尽量缩写.(如: color: #f00; )
7. 属性简写(如: margin: 0 10px;)

```CSS
/* Grid Start */
.g-wrap { 
    height: 100%;
    margin: 0; /* 4 - 10 */
    color: #f00; /* 6 */
    background-image: url("images/grid.png");
}
```

###### 根据属性的重要性按顺序书写
先显示定位布局类属性, 后盒模型等自身属性, 最后是文本类及装饰类属性.  
<table style="font-size:12px;text-align:left;font-family: Consolas,'Liberation Mono',Menlo,Courier,monospace;">  
    <tbody>
        <tr style="background:#f8f8f8;"> 
            <th>→</th>
            <th>显示属性</th>
            <th>自身属性</th>
            <th>文本属性和其他修饰</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>&nbsp;</td>
            <td>display</td>
            <td>width</td>
            <td>font</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>visibility</td>
            <td>height</td>
            <td>text-align</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>position</td>
            <td>margin</td>
            <td>text-decoration</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>float</td>
            <td>padding</td>
            <td>vertical-align</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>clear</td>
            <td>border</td>
            <td>white-space</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>list-style</td>
            <td>overflow</td>
            <td>color</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>top</td>
            <td>min-width</td>
            <td>background </td>
        </tr>
    </tbody>
</table>

###### 内核前缀 (私有在前, 标准在后)
```CSS
/**
 * 浏览器内核前缀
 * Chrome(谷歌): WebKit内核  -webkit-
 * Safari(苹果): WebKit内核  -webkit-
 * Firefox(火狐): Gecko内核  -moz-
 * IE         : Trident内核  -ms-
 * Opera(欧朋) : Presto内核   -o-
 */
.m-box {
    -webkit-box-shadow: 0 0 0 #000;
    -moz-box-shadow: 0 0 0 #000;
    box-shadow: 0 0 0 #000; 
}
```

###### 选择器顺序
- 从大到小(以旋转的范围为准)
- 从低到高(以等级上的高低为准)
- 从先到后(以结构上的先后为准)
- 从父到子(以结构上的嵌套为准)

```CSS
/* 从大到小 */
.m-list p { margin: 0; padding: 0; }
.m-list p.part { margin: 1px; padding: 1px; }

/* 从低到高 */
.m-logo a{ color: #f00; }
.m-logo a:hover{ color: #fff; }

/* 从先到后 */
.g-hd{ height: 60px; }
.g-bd{ height: 100px; }
.g-ft{ height: 40px; }

/* 从父到子 */
.m-list{ width: 80%; }
.m-list .item{ float: left; }
```

#### 统一语义理解和命名
布局（.g-）  
<table style="font-size:12px;text-align:left;font-family: Consolas,'Liberation Mono',Menlo,Courier,monospace;">  
    <tbody>
        <tr style="background:#f8f8f8;"> 
            <th width="30%">语义</th>
            <th width="30%">命名</th>
            <th>简写</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>文档</td>
            <td>doc</td>
            <td>doc</td>
        </tr>
        <tr>
            <td>头部</td>
            <td>head</td>
            <td>hd</td>
        </tr>
        <tr>
            <td>主体</td>
            <td>body</td>
            <td>bd</td>
        </tr>
        <tr>
            <td>尾部</td>
            <td>foot</td>
            <td>ft</td>
        </tr>
        <tr>
            <td>主栏</td>
            <td>main</td>
            <td>mn</td>
        </tr>
        <tr>
            <td>主栏子容器</td>
            <td>mainc</td>
            <td>mnc</td>
        </tr>
        <tr>
            <td>侧栏</td>
            <td>side</td>
            <td>sd</td>
        </tr>
        <tr>
            <td>侧栏子容器</td>
            <td>sidec</td>
            <td>sdc</td>
        </tr>
        <tr>
            <td>盒容器</td>
            <td>wrap/box</td>
            <td>wrap/box</td>
        </tr>
    </tbody>
</table>

模块（.m-）、元件（.u-）  
<table style="font-size:12px;text-align:left;font-family: Consolas,'Liberation Mono',Menlo,Courier,monospace;">  
    <tbody>
        <tr style="background:#f8f8f8;"> 
            <th width="30%">语义</th>
            <th width="30%">命名</th>
            <th>简写</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>导航</td>
            <td>nav</td>
            <td>nav</td>
        </tr>
        <tr>
            <td>子导航</td>
            <td>subnav</td>
            <td>snav</td>
        </tr>
        <tr>
            <td>面包屑</td>
            <td>crumb</td>
            <td>crm</td>
        </tr>
        <tr>
            <td>菜单</td>
            <td>menu</td>
            <td>menu</td>
        </tr>
        <tr>
            <td>选项卡</td>
            <td>tab</td>
            <td>tab</td>
        </tr>
        <tr>
            <td>标题区</td>
            <td>head/title</td>
            <td>hd/tt</td>
        </tr>
        <tr>
            <td>内容区</td>
            <td>body/content</td>
            <td>bd/ct</td>
        </tr>
        <tr>
            <td>列表</td>
            <td>list</td>
            <td>lst</td>
        </tr>
        <tr>
            <td>表格</td>
            <td>table</td>
            <td>tb</td>
        </tr>
        <tr>
            <td>表单</td>
            <td>form</td>
            <td>fm</td>
        </tr>
        <tr>
            <td>热点</td>
            <td>hot</td>
            <td>hot</td>
        </tr>
        <tr>
            <td>排行</td>
            <td>top</td>
            <td>top</td>
        </tr>
        <tr>
            <td>登录</td>
            <td>login</td>
            <td>log</td>
        </tr>
        <tr>
            <td>标志</td>
            <td>logo</td>
            <td>logo</td>
        </tr>
        <tr>
            <td>广告</td>
            <td>advertise</td>
            <td>ad</td>
        </tr>
        <tr>
            <td>搜索</td>
            <td>search</td>
            <td>sch</td>
        </tr>
        <tr>
            <td>幻灯</td>
            <td>slide</td>
            <td>sld</td>
        </tr>
        <tr>
            <td>提示</td>
            <td>tips</td>
            <td>tips</td>
        </tr>
        <tr>
            <td>帮助</td>
            <td>help</td>
            <td>help</td>
        </tr>
        <tr>
            <td>新闻</td>
            <td>news</td>
            <td>news</td>
        </tr>
        <tr>
            <td>下载</td>
            <td>download</td>
            <td>dld</td>
        </tr>
        <tr>
            <td>注册</td>
            <td>regist</td>
            <td>reg</td>
        </tr>
        <tr>
            <td>投票</td>
            <td>vote</td>
            <td>vote</td>
        </tr>
        <tr>
            <td>版权</td>
            <td>copyright</td>
            <td>cprt</td>
        </tr>
        <tr>
            <td>结果</td>
            <td>result</td>
            <td>rst</td>
        </tr>
        <tr>
            <td>标题</td>
            <td>title</td>
            <td>tt</td>
        </tr>
        <tr>
            <td>按钮</td>
            <td>button</td>
            <td>btn</td>
        </tr>
        <tr>
            <td>输入</td>
            <td>input</td>
            <td>ipt</td>
        </tr>
    </tbody>
</table>

功能（.f-）  
<table style="font-size:12px;text-align:left;font-family: Consolas,'Liberation Mono',Menlo,Courier,monospace;">  
    <tbody>
        <tr style="background:#f8f8f8;"> 
            <th width="30%">语义</th>
            <th width="30%">命名</th>
            <th>简写</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>浮动清除</td>
            <td>clearboth</td>
            <td>cb</td>
        </tr>
        <tr>
            <td>向左浮动</td>
            <td>floatleft</td>
            <td>fl</td>
        </tr>
        <tr>
            <td>向右浮动</td>
            <td>floatright</td>
            <td>fr</td>
        </tr>
        <tr>
            <td>内联块级</td>
            <td>inlineblock</td>
            <td>ib</td>
        </tr>
        <tr>
            <td>文本居中</td>
            <td>textaligncenter</td>
            <td>tac</td>
        </tr>
        <tr>
            <td>文本居右</td>
            <td>textalignright</td>
            <td>tar</td>
        </tr>
        <tr>
            <td>文本居左</td>
            <td>textalignleft</td>
            <td>tal</td>
        </tr>
        <tr>
            <td>垂直居中</td>
            <td>verticalalignmiddle</td>
            <td>vam</td>
        </tr>
        <tr>
            <td>溢出隐藏</td>
            <td>overflowhidden</td>
            <td>oh</td>
        </tr>
        <tr>
            <td>完全消失</td>
            <td>displaynone</td>
            <td>dn</td>
        </tr>
        <tr>
            <td>字体大小</td>
            <td>fontsize</td>
            <td>fs</td>
        </tr>
        <tr>
            <td>字体粗细</td>
            <td>fontweight</td>
            <td>fw</td>
        </tr>
    </tbody>
</table>

皮肤（.s-）  
<table style="font-size:12px;text-align:left;font-family: Consolas,'Liberation Mono',Menlo,Courier,monospace;">  
    <tbody>
        <tr style="background:#f8f8f8;"> 
            <th width="30%">语义</th>
            <th width="30%">命名</th>
            <th>简写</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>字体颜色</td>
            <td>fontcolor</td>
            <td>fc</td>
        </tr>
        <tr>
            <td>背景</td>
            <td>background</td>
            <td>bg</td>
        </tr>
        <tr>
            <td>背景颜色</td>
            <td>backgroundcolor</td>
            <td>bgc</td>
        </tr>
        <tr>
            <td>背景图片</td>
            <td>backgroundimage</td>
            <td>bgi</td>
        </tr>
        <tr>
            <td>背景定位</td>
            <td>backgroundposition</td>
            <td>bgp</td>
        </tr>
        <tr>
            <td>边框颜色</td>
            <td>bordercolor</td>
            <td>bdc</td>
        </tr>
    </tbody>
</table>

状态（.z-）  
<table style="font-size:12px;text-align:left;font-family: Consolas,'Liberation Mono',Menlo,Courier,monospace;">  
    <tbody>
        <tr style="background:#f8f8f8;"> 
            <th width="30%">语义</th>
            <th width="30%">命名</th>
            <th>简写</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>选中</td>
            <td>selected</td>
            <td>sel</td>
        </tr>
        <tr>
            <td>当前</td>
            <td>current</td>
            <td>crt</td>
        </tr>
        <tr>
            <td>显示</td>
            <td>show</td>
            <td>show</td>
        </tr>
        <tr>
            <td>隐藏</td>
            <td>hide</td>
            <td>hide</td>
        </tr>
        <tr>
            <td>打开</td>
            <td>open</td>
            <td>open</td>
        </tr>
        <tr>
            <td>关闭</td>
            <td>close</td>
            <td>close</td>
        </tr>
        <tr>
            <td>出错</td>
            <td>error</td>
            <td>err</td>
        </tr>
        <tr>
            <td>不可用</td>
            <td>disabled</td>
            <td>dis</td>
        </tr>
    </tbody>
</table>







