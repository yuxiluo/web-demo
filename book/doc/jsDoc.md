#### JavaScript风格指南(编码规范)
编码规范就是指导如何编写和组织代码的一系列标准, 可以让新人迅速的熟悉相关的代码, 并且也能写出让其他程序员简单易懂的代码。

#### 细节规范
> 文件  

**[建议]** 使用无 BOM 的 UTF-8 编码  
注: UTF-8 编码具有更广泛的适用性, BOM 在使用程序或工具处理文件时可能造成不必要的干扰.  
在文件结尾处, 保留一个空行.

> 结构  

1. 缩进  
**[强制]** 使用 4 个空格作为缩进层级  
switch 下的 case 和default 必须增加一个缩进层级  
```javascript
switch (variable) {
    case '1':
        // do...
        break;
    case '2':
        // do...
        break;
    default:
        // do...
}
```

2. 空格   
**[强制]** 二元运算符 两侧必须有一个空格, 一元运算符与操作对象之间不允许空格  

```javascript
// 示例
var a = !arr.length;
a++;
a = b + c; 
```
**[强制]** 代码块起始的左花括号 \{ 前面必须有一个空格   

```javascript
// 示例
if (condition) {
    // do...
}

function test() {
    // do...
}
```
**[强制]** if / else / for / while / function / switch / do / try / catch / finally 关键字后, 必须有一个空格.  

```javascript
// 示例
if (condition) {
    // do...
} else {
    // do...
}

for (var i = 0, len = arr.length; i < len; i++) {
    // do...
}

(function () {
    // do...
}());
```
**[强制]** 在创建对象时, 属性中的 : 之后必须有空格, : 之前不允许有空格.  

```javascript
// 示例
var obj = {
        a: null,
        b: 2,
        c: 3
    };
```
**[强制]** 函数声明、具名函数表达式、函数调用中, 函数名和 ( 之间不允许有空格.  

```javascript
// 示例
function test() {
    // 函数声明
}

// 具名函数表达式
var test = function test() {
    // 这里的函数名没什么作用
}

// 函数调用
test();
```
**[强制]** , 和 ; 前不允许有空格, 如果不位于行尾, 就必须有一个空格.  

```javascript
// 示例
callBack(a, b);

// bad
callBack(a , b) ;
```
**[强制]** 在函数调用、函数声明、括号表达式、属性访问、if / for / while / switch / catch 等语句中, () 和 [] 内紧贴括号部分不允许有空格.  

```javascript
// 示例
callBack(param1, param2, param3);

save(this.list['a']);

needIncream && (variable += increament);

if (num > arr.length) {
    // do...
}
```

3. 换行  
**[强制]** 每个独立语句结束后必须换行, 每行不得超过 120 个字符. (注: 超长的不可分割的代码允许例外, 比如辅助的正则表达式)  
**[强制]**  运算符处换行时, 运算符必须在新行的行首  

```javascript
// 示例
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // 超出范围 - 折行阅读更清晰
}

// 运算符折行 - 元算法位于行首
var result = number1 + number2 + number3
    + number4 + number5;

// 不允许在 , 或 ; 前换行
// bad
var obj = {
    a: 1
    , b: 2
    , c: 3
};
```

**[建议]** 不同行为或逻辑的语句集, 使用空行隔开, 更易阅读.  

```javascript
// 示例
function setStyle(element, property, value) {
    if (element == null) {
        return;
    }

    element.style[property] = value;
}
```

**[建议]** 在语句的行长度超过 120 时, 根据逻辑条件合理缩进  

```javascript 
// 示例

/*!
 * 较复杂的逻辑条件组合, 将每个条件独立一行, 
 * 逻辑运算符防止在行首进行分隔, 或将部分逻辑按逻辑组合进行分隔。
 * 最终将右括号 ) 与做大括号 { 放在独立一行, 保证与 `if` 内语句块能容易视觉识别
 */
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // Code
}

/*!
 * 按一定的长度截断字符串, 并使用 + 运算符连接
 * 对 HTML 片段的拼接, 通过缩进, 保存和 HTML 相同的结构
 */
var html = '' // 此处用一个空字符串, 以便整个 HTML 片段都在新行严格对齐  
    + '<artivle>'
    +   '<h1>Title here</h1>'
    +   '<p>This is a paragraph</p>'
    +   '<footer>Complete</footer>'
    + '</artivle>';

// 也可以使用数组来进行拼接, 相对 `+` 更容易调整缩进
var html = [
    '<artivle>',
        '<h1>Title here</h1>',
        '<p>This is a paragraph</p>',
        '<footer>Complete</footer>',
    '</artivle>'
];
html = html.join('');

/*!
 * 当参数过多时，将每个参数独立写在一行上，并将结束的右括号 ) 独立一行
 * 所有参数必须增加一个缩进
 */ 
foo(
    aVeryVeryLongArgument,
    anotherVeryLongArgument,
    callback
);

/*!
 * 也可以按逻辑对参数进行组合
 * 最经典的是 baidu.format 函数，调用时将参数分为“模板”和“数据”两块
 */  
baidu.format(
    dateFormatTemplate,
    year, month, date, hour, minute, second
);

/*!
 * 当函数调用时，如果有一个或以上参数跨越多行，应当每一个参数独立一行
 * 这通常出现在匿名函数或者对象初始化等作为参数时，如 `setTimeout` 函数等
 */  
setTimeout(
    function () {
        alert('hello');
    },
    200
);

order.data.read(
    'id=' + me.model.id,
    function (data) {
        me.attchToModel(data.result);
        callback();
    },
    300
);

// 链式调用较长时采用缩进进行调整
$('#items')
    .find('.selected')
    .highlight()
    .end();

// 三元运算符由3部分组成，因此其换行应当根据每个部分的长度不同，形成不同的情况
var result = thisIsAVeryVeryLongCondition
    ? resultA : resultB;

var result = condition
    ? thisIsAVeryVeryLongResult
    : resultB;

// 数组和对象初始化的混用，严格按照每个对象的 `{` 和结束 `}` 在独立一行的风格书写
var array = [
    {
        // ...
    },
    {
        // ...
    }
];
```

**[建议]** 对于 `if...else...`、`try...catch...finally` 等语句, 推荐使用在 }  号后添加一个换行的风格, 使代码层次结构更清晰, 阅读性更好.   

```javascript
// 示例
if (condition) {
    // ...
}
else {
    // ...
}

try {
    // ...
}
catch (err) {
    // ...
}
```

4. 语句  
**[强制]** 不得省略语句结束的分号, 在if / else / for / do / while 语句中, 即使只有一行, 也不得省略块 \{ ... }   

```javascript   
// 示例
if (condition) {
    callBack();
}

// bad
if (condition) callBack();
if (condition)
    callBack();
```

**[强制]** 函数声明结束不允许添加分号   

```javascript   
// 示例
function test() {
    // ...
}

// 如果是函数表达式, 分号是不允许省略的
var test = function () {
    // ...
};

// bad
function test() {
    // ...
};
```

**[强制]** IIFE(立即执行函数) 必须在函数表达式外添加 `(`, 非IIFE 不得在函数表达式外添加 `(`  

```javascript
// 示例
var task = (function () {
    return result;
})();

// bad
var task = function () {
    return result;
}();
```

> 命名  

```javascript   
// [强制] 变量 使用 Camel(小驼峰命名法)
// 示例
var loadingModules = {};

// [强制] 常量 使用 全部字母大写, 单词间下划线分隔 的命名方式
// 示例
var HTML_ENTITY = {};

// [强制] 函数 使用 Camel(小驼峰命名法)
// 示例
function stringFormat(source) {
    // ...
}

// [强制] 类 使用 Pascale(大驼峰命名法)
// 示例
function TextNode(options) {
    // 构造函数
}

// [强制] 类的 方法 / 属性 使用 Camel(小驼峰命名法)
// 示例
function TextNode(value, engine) {
    this.value = value;
    this.engine = engine;
}

TextNode.prototype.clone = function () {
    return this;
}

// [强制] 命名空间 使用 Came(小驼峰命名法)
// 示例
equipments.heavyWeapons = {};

// [强制] 由多个单词组成的缩写词, 在命名中, 根据当前命名法和出现的位置
// 所有字母的大小写与首字母的大小写保持一致
// 示例
function XMLParser() {
    // ...
}

function insertHTML(element, html) {
    // ...
}

var httpRequest = new HTTPRequest();

// [建议] 函数名 使用动宾短语
// 示例
function getStyle(element) {
    // ...
}

// [建议] boolean 类型的变量使用 is 或 has 开头
// 示例
var isReady = false;
var hasMoreCommands = false;

// [建议] Promise对象 用 动宾短语的进行时 表达
// 示例
var loadingData = ajax.get('url');
loadingData.then(callback);
```

#### 注释  
单行注释   
```javascript
// 必须独占一行. // 后跟一个空格, 缩进和下一行被注释说明的代码一致
```

文档化注释  
```javascript   
/*!
 * 1. 文件 (@file 文件顶部必须包含文件注释)
 * 2. 命名空间 (@namespace)
 * 3. 类 (@class - 继承 @extends)
 * 4. 函数和方法 
 *    函数和方法的描述 及 参数的类型
 *    @param {string}、{number}、{boolean}、{Object}、{Function}、{RegExp}、{Array}、{Date}
 * 
 * 5. 类属性
 * 6. 事件 (@event, @fires标识广播的事件)
 *    值变更时触发
 *    @event Select#change
 * 
 *    点击处理
 *    @fires Select#change
 * 
 * 7. 全局变量
 * 8. 常量 (@const)
 *    常量说明
 *    @const
 *    @type {string}
 * 
 * 9. AMD 模块
 */
```

细节注释  
对于内部实现、不容易理解的逻辑说明、摘要信息等, 我们可能需要编写细节注释  
```javascript
function foo(p1, p2, p3) {
    // 对具体内部逻辑进行说明
    // 说明太长需要换行
    for (...) {
        // ...
    }
}
```

**[强制]** 对一些特殊标记进行说明   

- TODO: 有功能待实现. 需对功能进行简单说明.
- FIXME: 该处代码允许没有问题, 但可能由于时间赶或其他原因, 需要修正.
- HACK: 为修正某些问题而写的不太好或者使用了某些诡异手段的代码
- XXX: 该处存在陷阱. 需要对陷阱进行描述 


#### 语言特性  
**变量**  
[强制] 变量必须 即用即声明, 不得在函数或其它形式的代码块起始位置统一声明所有变量  
解释:   
变量声明与使用的距离越远, 出现的跨度越大, 代码的阅读与维护成本越高. 应缩小变量出现的距离空间.
```javascript   
// 必须通过 var 声明变量, 不使用 var 定义的变量将会污染全局环境
var name = 'MyName';

// 声明多个变量, 以逗号隔开
var name = 'MyName',
    age = 30,
    sex = 'man';
```

**判断条件**   
[强制] 在判断条件中使用类型严格的 ===, 仅当判断 null 或 undefined 时, 允许使用 ==   
```javascript
// 使用 === 可以避免等于判断中隐式的类型转换
if (age === 30) {
    // ...
}

// [建议] 尽可能使用简洁的表达式
// 字符串为空 或 非空
if (name) {
    // ...
}

// 数组是否为空
if (arr.length) {
    // ...
}

// 布尔值
if (notTrue) {
    // ...
}

// null 或 undefined
if (noValue == null) {
    // ...
}
```

[建议] 对于相同变量或表达式的多值条件, 用 switch 代替 if  
```javascript
// 示例
switch (typeof variable) {
    case 'object':
        // ...
        break;
    case 'number':
    case 'boolean':
    case 'string':
        // ...
        break;
}

// bad
var type = typeof(variable);
if (type === 'object') {
    // ...
}
else if (type === 'number' || type === 'boolean' || type === 'string') {
    // ...
}
```

[建议] 如果函数或全局中的 else 块后没有任何语句, 可以删除else   
```javascript
// 示例
function getName() {
    if (name) {
        return name;
    }

    return 'unnamed';
}

// bad
function getName() {
    if (name) {
        return name;
    }
    else {
        return 'unnamed';
    }
}
```

#### 循环
[建议] 不要在循环体中包含函数表达式, 事先将函数提取到循环体外   
```javascript
// 示例
function clicker() {
    // ...
}

for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];
    addListener(element, 'click', clicker);
}

// bad
for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];
    addListener(element, 'click', function () {});
}
```

[建议] 对循环内多次使用的不变值, 在循环外用变量缓存   
```javascript   
// 示例
var width = wrap.offsetWidth + 'px';
for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];
    element.style.width = width;
    // ...
}

// bad
for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];
    element.style.width = wrap.offsetWidth + 'px';
    // ...
}
```

[建议] 对有序集合进行顺序无关的遍历时, 使用逆序遍历   

```javascript   
// 逆序变量可以节省变量, 代码比较优化
var len = elements.length;
while (len--) {
    var element = elements[len];
    // ...
}
```

#### 类型、字符串
- 转换成 string 时, 使用 + ''
- 转换成 number 时, 使用 +str
- string 转 number, 要转换的字符串结尾包含非数字并期望忽略时， 使用parseInt, parseInt('200px', 10);
- 字符串开头和结束使用单引号 '
- 使用字符串拼接的方式生成HTML, 需要根据语境进行合理的转义
  (如: HTML转义、URL转义)
- 复杂的数据到视图字符串的转换过程, 使用模版引擎
    - artTemplate: 体积较小，在所有环境下性能高，语法灵活。
    - dot.js: 体积小，在现代浏览器下性能高，语法灵活。
    - etpl: 体积较小，在所有环境下性能高，模板复用性高，语法灵活。
    - handlebars: 体积大，在所有环境下性能高，扩展性高。
    - hogon: 体积小，在现代浏览器下性能高。
    - nunjucks: 体积较大，性能一般，模板复用性高。

#### for in 遍历对象时, 使用hasOwnProperty过滤掉原型中的属性
```javascript   
// 示例
var newInfo = {};
for (var key in info) {
    if (info.hasOwnProperty(key)) {
        newInfo[key] = info[key];
    }
}
```

#### 参考资料
[Google](https://google.github.io/styleguide/jsguide.html)  
[EFCS](https://github.com/ecomfe/spec)

















