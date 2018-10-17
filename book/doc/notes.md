#### 注释
---------

> 为什么要写注释?   
> 合理的注释有助于后期维护.  
> [提示:] 可以通过编辑器的语法高亮功能, 确保HTML、CSS、JS文件中的注释语法正确    

[单行/多行注释][notes1] - [函数注释][notes2]

[notes1]: https://alloyteam.github.io/CodeGuide/#js-comments-multiline
[notes2]: http://yuri4ever.github.io/jsdoc/

#### HTML注释
> 在较长的HTML文件中, 在板块开始和板块结束位置添加注释, 使得结构更清晰

```html
...
<!-- 活动板块 Start -->
<div class="plate-activity">
...
</div>
<!-- / 活动板块 -->
...
```

#### CSS注释 
A. 文件注释(在文件头部对文件整体说明)  
```javascript
格式: 要写清楚该文件的用途、作者、日期、版本等...
/*!
 * @Description: {todo}(用一句话描述该文件做什么)
 * @author yuxi0530 <yuxi0530@aliyun.com>
 * @date: {time}
 * @version: V1.0
 */ 
```

B. CSS文件中对某些关键样式的注释  
```css
...
/*单行文本超出省略号(...)*/
.ellips{
    display: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
...
```

#### JavaScript注释
A. 文件注释(在文件头部对文件整体说明)  
```javascript
格式: 要写清楚该文件的用途、作者、日期、版本等...
/*!
 * @Description: {todo}(用一句话描述该文件做什么)
 * @author yuxi0530 <yuxi0530@aliyun.com>
 * @date: {time}
 * @version: V1.0
 */ 
```

B. 多行注释 和 函数注释
> 难以理解的代码片段  
> 可能存在错误的代码片段   
> 浏览器特殊的HACK代码  
> 业务逻辑强相关的代码   
> 所有常量、全局变量  
> 所有函数

```javascript
/*!
 * @func 
 * @desc 用于测试 - 一下是各参数说明
 * @param {string} a - 参数a
 * @param {number} b = 1 - 参数b默认值为1
 * @param {boolean} c - 参数是个布尔值
 */
function test(a, b, c) {
    ...
}
```


















