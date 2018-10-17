/*
 * tools.js 原生封装操作DOM的方法
 * 1. 获取元素
 * 2. 绑定事件
 * 3. 对class的增删改查
 */

var tools = {
	// 获取元素
	$: function(selector, parent) {
		/*
		 * # 通过ID获取
		 * . 通过class来获取
		 * tag 通过标签获取
		 */
		var result,
			parent = parent || document;

		switch(selector.charAt(0)) {
			case "#":
			result = document.getElementById(selector.slice(1));
			break;
			case ".":
			result = parent.getElementsByClassName(selector.slice(1));
			break;
			default:
			result = parent.getElementsByTagName(selector);
		}

		return result;
	},
	// 绑定事件，给某个元素，绑定某个事件，执行某个函数
	addEvent: function(elem, eventType, handle) {
		if( elem.addEventListener ){
			elem.addEventListener(eventType, handle, false);
		}else if( elem.attachEvent ){
			elem.attachEvent('on' + eventType, function(){
				handle.call(elem);
			});
		}else{
			elem['on' + eventType] = handle;
		}
	}, 
	// 解除绑定事件
	removeEvent: function(elem, type, handle){
		if(elem.removeEventListener) {
			elem.removeEventListener(type, handle, false);
		}else if(elem.detachEvent) {
			elem.detachEvent('on' + type, function() {
				handle.call(elem);
			});
		}else{
			elem['on' + type] = null;
		}
	},
	// 阻止默认事件
	cancelHandler: function(event){
		var ev = event || window.event;
		if(ev.preventDefault) {
			ev.preventDefault();
		}else{
			ev.returnValue = false;
		}
	},
	// 检查两个物体是否碰撞了
	collisionRect: function(obj1, obj2){
		var t1 = obj1.offsetTop,
			l1 = obj1.offsetLeft,
			r1 = obj1.offsetLeft + obj1.offsetWidth,
			b1 = obj1.offsetTop + obj1.offsetHeight;
		var t2 = obj2.offsetTop,
			l2 = obj2.offsetLeft,
			r2 = obj2.offsetLeft + obj2.offsetWidth,
			b2 = obj2.offsetTop + obj2.offsetHeight;
		 

		if( t1 > b2 || r1 < l2 || b1 < t2 || l1 > r2 ){
			// 表示没有碰上
			return false;
		}else{
			return true;
		}
	},
	// 添加class
	addClass: function(elem, className) { 
		if(typeof(className) === "string" && !this.hasClass(elem, className)) {
			elem.className += " " + className; 
		}
	},
	// 删除class
	removeClass: function(elem, className) {
		var curClassarr = elem.className.split(" "); 
		for(var i = 0; i < curClassarr.length; i++){ 
			if( curClassarr[i] === className ){
				curClassarr.splice(i, 1); 
				break;
			}
		}  
		elem.className = curClassarr.join(' ');
	},
	// 判断某个元素上是否存在传入的class
	hasClass: function(elem, className) { 
		var curClassarr = elem.className.split(" "); 
		for(var i = 0; i < curClassarr.length; i++){  
			if( curClassarr[i] === className ){
				return true;
			}
		} 
		return false;
	},
	// 切换class
	toggleClass: function(elem, className) { 
		if(!this.hasClass(elem, className)) { 
			this.addClass(elem, className);
			return true;
		}else{ 
			this.removeClass(elem, className);
			return false;
		}
	},
	// 元素显示
	show: function(elem) {
		elem.style.display = 'block';
	},
	// 元素隐藏
	hide: function(elem){
		elem.style.display = 'none';
	},
	// 根据条件查找某个元素的父节点
	parentsElement: function(elem, nodeType) {
		// 查找 elem 的父节点 selects
		console.log('初始化：', elem.tagName, elem)
		var result = null;
		if( elem.tagName ){
			if( !nodeType ){
				console.log('默认:', elem.parentNode);
				result = {type: 'default'}
				// return elem.parentNode;
			}else if( elem.parentNode.tagName && elem.parentNode.tagName.toLowerCase() ==  nodeType ){
				// elem.parentNode.style.background = '#f00';
				console.log('标签:', elem.parentNode);
				// return elem.parentNode;
				result = {type: 'class'}
			}
		}
		console.log(result, '+++')
		return result;



		// if( elem ){ 
		// 	var result = null,
		// 		parent = elem.parentNode;
		// 	if( !parent.tagName ){
		// 		return;
		// 	}
		// 	switch(nodeType.charAt(0)){
		// 		case "#": 
		// 		if( parent.getAttribute('id') == nodeType.slice(1) ){
		// 			return parent;
		// 		}	
		// 		break;
		// 		case '.': 
		// 		if( this.hasClass(parent, nodeType.slice(1)) ){
		// 			return parent;
		// 		}
		// 		break;
		// 		default:
		// 		if( parent.tagName.toLowerCase() ==  nodeType ){
		// 			return parent;
		// 		} 
		// 	} 	 
		// 	this.parentsElement(parent, nodeType);
		// } 
	}




}