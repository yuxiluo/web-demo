### canvas 2D 绘图
浏览器兼容： IE9+

<canvas> 元素只有两个属性 width 和 height, 默认宽度为300px和高度150px；
示例：
<canvas id="canvas-x" width="300" height="150"></canvas>

canvas 起初是空白的，为了展示，首先需要找到渲染元素，然后在它的上面绘制。
// 获取元素
var canvasX = document.getElementById('canvas-x');
// getContext() 方法返回一个用于在画布上绘图的环境。"2d" 表示二维
var ctx = canvasX.getContext('2d');

可以通过 canvasX.getContext 来判断是否支持，不支持给出提示.

ctx.fillStyle = color | gradient |pattern;
用于填充绘画的颜色、渐变、模式

### 绘制矩形
ctx.fillRect(x, y, width, height);
绘制一个填充的矩形

ctx.strokeRect(x, y, width, height);
绘制一个矩形的边框

ctx.clearRect(x, y, width, height);
清除指定矩形区域，让清除部分完全透明

### 绘制路径

图形的基本元素是路径。
绘制路径图形的步骤：
1. 首先，创建路径起点
2. 使用画图命令去画出路径
3. 封闭路径
4. 一旦路径生成，就能通过描边或填充路径区域来渲染图形

ctx.beginPath()
新建一条路径

ctx.closePath()
闭合路径

ctx.stroke() // 描边
通过线条来绘制图形轮廓

ctx.fill() // 填充
填充路径的内容区域

路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径(线、弧形、等)构成图形。每次调用beginPath()方法之后，列表清空重置，就可以重新绘制新的图形。

当调用fille()函数时，所有没有闭合的形状都会自动闭合。调用stroke() 时不会自定闭合。

ctx.moveTo(x, y); // 设置起点
把路径移动到画布中的指定位置，不创建线条。

ctx.lineTo(x, y); // 绘制直线
添加一个新点，然后创建从该点到画布中最后指定点的线条. (该方法并不会创建线条)



ctx.arc(x, y, r, sAngle, eAngle, 绘制的方向);
绘制圆弧或圆, 绘制圆，起始角度设置为0，结束角度设置为2*Math.PI
参数说明:
x: 圆中心的x坐标
y: 圆中心的y坐标
r: 圆的半径
sAngle: 起始角度，以弧度计(弧的圆形的三点钟位置是0度)
eAngle: 结束角度
绘制方向: 默认为 true = 逆时针, false = 顺时针

ctx.arcTo(x1, y1, x2, y2, radius);
根据给定的控制点和半径画一段圆弧.

弧度： (Math.PI/180)*角度


二次贝塞尔曲线、三次贝塞尔曲线(一般用来绘制复杂有规律的图形)
ctx.quadraticCurveTo(cp1x, cp1y, x, y);
绘制二次贝塞尔曲线， cpx1, cp1y为控制点，x, y 为结束点

beaierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
绘制三次贝塞尔曲线,cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点







































