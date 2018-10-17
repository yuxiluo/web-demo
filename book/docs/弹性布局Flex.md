#### Flex 布局 - (弹性布局)
任何一个容器都可以指定Flex布局。
.box{
	// 块元素
	display: flex;
	// 行内元素
	display: inlien-flex;
	// webkit内核浏览器
	display: -webkit-flex;
	display: flex;
}

注意： 设置Flex布局以后，子元素的float、clear和vertical-align属性将失效。

Flex布局的 6 个属性：
A. flex-direction 设置子项的排列方向
语法：
flex-direction: row | row-reverse | column | column-reverse; 
row: 水平方向，从左往右
row-reverse: 水平方向，从右往左
column: 垂直方向， 从下往上
column-reverse: 垂直方向，从上往下

B. flex-wrap 设置轴线如何换行
语法：
flex-wrap: nowrap | wrap | wrap-reverse;
nowrap(默认): 不换行
wrap: 换行，第一行在上方
wrap-reverse: 换行，第一行在下方

C. flex-flow 是 flex-direction和flex-wrap的简写形式，默认值为row nowrap；

D. justify-content 定义子项的对齐方式
语法：
justify-content: flex-start | flex-end | center | space-between | space-around;
flex-start: 左对齐
flex-end: 右对齐
center: 居中对齐
space-between: 两端对齐，子项之间的间隔都相等
space-around: 子项两侧的间隔相等，中间的间隔是两侧间隔的2倍

E. align-items 定义子项在Y轴上的对齐方式
语法：
align-items: flex-start | flex-end | center | baseline | stretch;
flex-start: 顶对齐
flex-end: 底对齐
center: 垂直居中对齐
baseline: 子项的第一行位置的基线对齐
stretch(默认值): 如果没有设置高度和auto，则为整个容器的高度

F. align-content 定义多根轴线的对齐方式
语法：
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
flex-start: 顶对齐
flex-end: 底对齐
center: 居中对齐
space-between: 两端对齐，子项之间的间隔都相等
space-around: 子项两侧的间隔相等，中间的间隔是两侧间隔的2倍
stretch(默认值): 占满整个容器

















































