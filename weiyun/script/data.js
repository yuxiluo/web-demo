// 数据模拟
/*
 * id: 当前数据的ID
 * pid: 父层的id [-1: 表示顶层]
 * title: 标题
 * type: 类型
 */
var cusTree = {
	files: [
		{
			id: 11,
			pid: -1,
			title: "百度网盘",
			type: "file"
		},{
			id: 1,
			pid: 0,
			title: "我的文档",
			type: "file"
		},{
			id: 2,
			pid: 0,
			title: "我的音乐",
			type: "file"
		},{
			id: 3,
			pid: 2,
			title: "周杰伦",
			type: "file"
		},{
			id: 3333,
			pid: 2,
			title: "罗志祥",
			type: "file"
		},{
			id: 3001,
			pid: 3333,
			title: "专辑1",
			type: "file"
		},{
			id: 300101,
			pid: 3001,
			title: "专辑1",
			type: "file"
		},{
			id: 3002,
			pid: 3333,
			title: "志祥歌曲2",
			type: "file"
		},{
			id: 4,
			pid: 3,
			title: "发如雪",
			type: "file"
		},{
			id: 5,
			pid: 3,
			title: "稻香",
			type: "file"
		},{
			id: 6000,
			pid: 0,
			title: "我的视频",
			type: "file"
		},{
			id: 7,
			pid: 6000,
			title: "舞蹈培训",
			type: "file"
		},{
			id: 8,
			pid: 0,
			title: "妙味课堂",
			type: "file"
		},{
			id: 9,
			pid: 8,
			title: "javascript初级",
			type: "file"
		},{
			id: 901,
			pid: 9,
			title: "js初级-第一部分",
			type: "file"
		},{
			id: 10,
			pid: 8,
			title: "HTML+CSS",
			type: "file"
		},{
			id: 12,
			pid: 11,
			title: "百度员工",
			type: "file"
		},{
			id: 0,
			pid: -1,
			title: "微云",
			type: "file"
		}
	],
	"mailList": [
		{
			id: 0,
			title: '婚姻下半场, 拼的是爱和钱?',
			des: '如果你爱一个人, 那就跟他结婚吧, 因为爱情很甜.如果你恨一个人, 那就跟他结婚吧, 因为婚姻很苦.',
			time: '2018-09-18'
		},{
			id: 1,
			title: '努力,别让自己穷的那么稳定!',
			des: 'WebGL 通过引入了一套非常地符合 OpenGL ES 2.0 并且可以用在 HTML5 元素中的 API 给 Web 带来了 3D 图像功能',
			time: '2018-09-18'
		},{
			id: 2,
			title: '勤劳才能致富嘛',
			des: 'WebGL 通过引入了一套非常地符合 OpenGL ES 2.0 并且可以用在 HTML5 元素中的 API 给 Web 带来了 3D 图像功能',
			time: '2018-09-18'
		},{
			id: 3,
			title: '台风来了',
			des: 'WebGL 通过引入了一套非常地符合 OpenGL ES 2.0 并且可以用在 HTML5 元素中的 API 给 Web 带来了 3D 图像功能',
			time: '2018-09-18'
		},{
			id: 4,
			title: '儿童心理学',
			des: 'WebGL 通过引入了一套非常地符合 OpenGL ES 2.0 并且可以用在 HTML5 元素中的 API 给 Web 带来了 3D 图像功能',
			time: '2018-09-18'
		}
	]
}













