语义升级：能够更恰当地描述页面内容
新增语义标签

	<article>、<footer>、<header>、<nav>、<section>

嵌入视频和音频
	
	<audio> 和 <video>

增强表单控件类型
	
	calendar、date、time、email、url、search

改进 &lt;iframe>
	
	精确控制 <iframe> 元素的安全级别以及期望的渲染

直接嵌入数学公式
	
	<MathML>

通信升级：能够使客户端和服务器之间通过创新的技术方法进行通信
	
	Web Sockets（全双工通信协议)
	Server-sent events（服务器推送)
	WebRTC（网页实时通信）

视屏会议
	
	CORS（跨域资源共享）
	Access-Control-Allow-Origin

离线 & 存储：能够让网页在客户端本地存储数据以及更高效地离线运行

	AppCache(应用程序缓存)
	online 与 offline 事件
	localStorage 和 sessionStorage
	IndexedDB（可根据索引进行高性能检索）
	FileReader（访问由用户选择的本地文件）

多媒体：使 Web 原生支持音视频播放
	
	<audio> 和 <video> 支持新的多媒体内容
	WebRTC 在浏览器中直接控制视频会议
	Camera API 直接操作计算机摄像头，并存储图像
	rack 和 WebVTT 支持字幕
	2D/3D 绘图 & 效果：为页面展示提供了更加丰富多彩的呈现选择
	Canvas 绘制图像和文本
	WebGL 可渲染 3D 影像
	SVG 可制作矢量图形

性能优化 & API 集成：提供了非常显著的性能优化和更有效的计算机硬件使用

	新增选择器
	document.querySelector
	document.querySelectorAll
	跨窗口通信 PostMessage
	页面可见性改变事件 visibilitychange
	Web Workers 多任务
	把 JavaScript 计算委托给后台线程，防止交互型事件变得缓慢
	XMLHttpRequest Level 2
	FormData
	History API

允许对浏览器历史记录进行操作

	contentEditable 属性
	页面元素可编辑
	Drag and Drop API
	支持元素在网站内部和网站之间拖放
	HTML 中的焦点管理
	activeElement 和 hasFocus 属性
	统计点击次数
	requestAnimationFrame
	控制动画渲染以获得更优性能
	全屏 API
	控制网页或者应用程序使用整个屏幕
	桌面通知 Notifications
	鼠标指针锁定 API
	指针到达窗口限制时也不会失去焦点
	应用于 3D 游戏
	设备访问 Device Access：能够处理各种输入和输出设备
	Camera API
	允许使用和操作计算机的摄像头，并存取照片
	触控事件 TouchEvent
	对用户按下触控屏的事件做出反应
	地理位置定位 Geolocation
	让浏览器使用地理位置服务定位用户的位置
	样式设计: 全面支持 CSS3
	新的背景样式特性
	box-shadow 给逻辑框设置一个阴影，而且还可以设置多背景
	更精美的边框
	border-image 展示图片边框
	border-radius 支持圆角边框
	设置动画
	transitions 在不同的状态间设置动画
	animations 自动播放动过
	排版方面的改进
	文字溢出 text-overflow 和 断字 hyphenation
	文字阴影 text-shadow 和 文本修饰 text-decorations
	使用自定义字体 @font-face
	新的展示性布局
	多栏布局 column-count、column-width
	弹性布局 Flexible 