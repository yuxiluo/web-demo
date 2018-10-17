
如何撰写API文档
执行同行评审
运行JSLint代码检查


通过这些约束让你养成一种习惯，这些习惯和最佳做法可以帮助你写出更好，更易于理解和维护的代码。

要求对代码进行审查，修改和调整:


可维护的代码意味着：
:: 可读性
:: 一致性
:: 可预测的
:: 看上去就像是同一个人写的
:: 已记录


1. 全局变量的问题
web页面包含的不是该页面开发者所写的代码.
可能会包含：
:: 第三方的JavaScript库
:: 广告方的脚本代码
:: 第三方用户跟踪和分析脚本代码
:: 不同类型的小组件，标志和按钮

始终使用 var 来声明变量

需要注意的隐式全局变量：
function test(x, y) {
	// 隐式全局变量
	result = x + y; 
	return result;
}

// 推荐
function test(x, y) { 
	var result = x + y; // 局部变量
	return result;
}

使用任务链进行部分var声明:
function test(){
	var a = b = 10;
	// 赋值是从右往左
}

// 推荐
function test(){
	var a, b;
	a = b = 0; // 均是局部变量
}

单var形式
在函数顶部使用单var语句是比较有用的一种形式，其好处在于:
:: 方便寻找功能所需要的所有全局变量
:: 防止变量在定义之前使用的逻辑错误
:: 增加代码的可读性

// 使用一个 var 语句声明多个变量， 并以逗号分隔。
// 未赋值的变量，初始化的值是undefined
function test(){
	var a = 1,
		b = 2,
		result = {},
		num;
	// ...
}	


缓存获取的集合数据：
for( var i = 0; i < arr.length; i++ ) {
	// ... 循环的时候都需要去取arr的长度
}

// 推荐
for( var i = 0, len = arr.length; i < len; i++ ){
	// ... 缓存起来，只需要检索一次长度值
}


数组使用 for 循环， 对象使用 for-in循环

使用for-in进行循环也称之为"枚举"
hasOwnProperty() 方法，当遍历对象属性的时候可以过来掉从原型链上下来的属性。

// 对象
var man = {
	name: 'minle',
	age: '20'
}
// 给所有对象添加一个方法
if( typeof Object.prototype.clone === 'undefined') {
	Object.prototype.clone = function() {};
}

避免枚举man的时候出现clone()方法，需要通过hasOwnProperty()方法过滤原型属性。
for ( var i in man ) {
	// 过滤原型属性
	if( man.hasOwnProperty(i) ) {
		console.log( i, ":", man[i] );
	}
}
/*
name : 'minle'
age : 20
*/

for ( var i in man ) {
	console.log( i, ":", man[i] );
}
/*
name : 'minle'
age : 20
clone : function(){}
*/


switch模式(约定)
:: 每个case和switch对齐
:: 每个case中代码缩进
:: 每个case以break清除结束
:: 以default结束switch,确保总有健全的结果。

switch ( number ) {
case 0:
	result = 0;
	break;
case 1:
	result = 1;
	break;
default: 
	result = 100;
}


避免隐私类型转换
如: false == 0 或 '' == 0;
// 比较值 和 表达式类型的时候始终使用 === 和 !== 操作符
var num = 0;
if( num == false ){
	// ... 执行了
}

// 推荐
if( num === false ){
	// ... 必须类型相同
}


避免使用eval()

parseInt() 下的数值转换
// 推荐
parseInt('08abc', 10);

缩进： 一般为4个空格缩进

花括号{}:
// 推荐
for ( var i = 0; i < 10; i++ ) {
	// 左花括号最好保持在同一行
}

适合使用空格的地方包括:
for循环分号分开后的部分
for ( var i = 0; i < 10; i++ ) { 
	// ...
}
分隔数值项的逗号的后面: [1, 2, 3]
对象属性名后面的冒号及逗号后面: { a: 1, b: 2 }
函数参数: function (a, b, c)
函数的花括号前面: function() {}
在只用比较运算符时前后都需要空格: 如:+， -， *， =， <， >， <=， >=,  ===, !==, &&, ||, +=

命名规范：
构造函数首字母大写 
var add = new Person();

小驼峰命名： getFirstName()

常量： 
var PI = 3.14,
    MAX_WIDTH = 150;


 
























