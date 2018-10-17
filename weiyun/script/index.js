(function(){
	// 计算内容区域的高度
	setLayoutMainHeight();

	// 窗口改变大小时
	window.onresize = setLayoutMainHeight;
	function setLayoutMainHeight() {
		var hand = tools.$('.layout-toolbar')[0],
			handH = hand.offsetHeight,
			windowH = document.documentElement.clientHeight || document.body.clientHeight;
			layoutMain = tools.$('.layout-main')[0];

		layoutMain.style.height = windowH - handH + 'px';
	}
 
 
	// 初始化 - 渲染内容区域
	createRightHtml();
	function modContentPlate(id) {
		var modItemWrap = tools.$('.mod-item-wrap')[0], 
			firstTopLayer = getData.getTopLayerData(cusTree.files, -1),
			id = id || firstTopLayer.id; 
		
		var fileData = getData.getChildByIdData(cusTree.files, id),
		    haschilds = getData.haschilds(cusTree.files, id),
		    filesHtml = '<div class="mod-files-list clearfix"><ul> ';
		for(var i = 0, len = fileData.length; i < len; i++){
			filesHtml +=  filesContItem(fileData[i])
		} 
		filesHtml += '</ul></div>';

		// 无数据时候 - 空白提示
		if( !haschilds ) {
			filesHtml = blankTipsTemplate({
				title: '暂无文件',
				des: '请点击左上角的“上传”按钮添加'
			});
		}
		modItemWrap.innerHTML = filesHtml;
	}  

	// 渲染目录树
	var fileTree = tools.$('.file-tree')[0];
	var treeHtml = ''
	+'<div class="tree-cont">'
	+ treeTemplate(cusTree.files, -1)
	+'</div>';
	fileTree.innerHTML = treeHtml;
	
	// 点击目录树, 获取当前点击层级下的所有子数据, 并在右侧渲染
	var treeCont = tools.$('.tree-cont')[0];
	tools.addEvent(treeCont, 'click', function(event) {
		var ev = event || window.event,
			target = ev.target || ev.srcElement,
			curId = target.getAttribute('data-treeid'),
			curPid = target.getAttribute('data-treepid'),
			text = target.innerText; 

		createRightHtml(curPid, text, curId);
	});

	// 点击内容区域的列表
	var modFilesList = tools.$('.mod-item-wrap')[0];
	tools.addEvent(modFilesList, 'click', function(event) {
		var ev = event || window.event,
			target = ev.target || ev.srcElement,
			parentEl = target.offsetParent;
		
		if( target.tagName.toLowerCase() == 'em' ){
			// 点击内如区域中的复选框
			tools.toggleClass(target, 'icon-checkboxed'); 
			tools.removeClass(parentEl, 'cur');
			if( tools.hasClass(target, 'icon-checkboxed') ){
				tools.addClass(parentEl, 'cur');
			}
			hasSelectAll(); 
		}else if( parentEl.tagName.toLowerCase() == 'li'){
			var curId = parentEl.getAttribute('data-treeid'),
				curPid = parentEl.getAttribute('data-treepid'),
				text = parentEl.innerText;
			 
			createRightHtml(curPid, text, curId);
		}  
	}); 

	// 点击全选按钮
	var checkAll = tools.$('#checkAll');
	tools.addEvent(checkAll, 'click', function(event) {
		var checked = 'icon-checkboxed'; 
		console.log(tools.hasClass(this, checked))
		if( tools.hasClass(this, checked) ){
			tools.removeClass(this, checked); 
			selectAllCheck();
		}else{
			tools.addClass(this, checked);
			selectAllCheck(true);
		} 
	});  

	// 点击面包屑
	var treeBased = tools.$('.tree-based')[0];
	tools.addEvent(treeBased, 'click', function(event) {
		var ev = event || window.event,
			target = ev.target || ev.srcElement;
		 
		if( target.tagName.toLowerCase() == 'a'){
			var curId = target.getAttribute('data-treeid'),
				curPid = target.getAttribute('data-treepid'),
				text = target.innerText;
			 
			createRightHtml(curPid, text, curId);
		} 
	}); 

	// 创建右侧 HTML
	function createRightHtml(curPid, text, curId){ 
		var firstTopLayer = getData.getTopLayerData(cusTree.files, -1),
			text = text || firstTopLayer.title,
			curPid = curPid || -1;
   
		// 渲染面包屑
		createBased(curPid, text);
		// 渲染内容
		modContentPlate(curId);
		// 清除全选选框
		tools.removeClass(tools.$('#checkAll'), 'icon-checkboxed');
	}

	// 面包屑导航
	function createBased(curPid, lastText){
		var treeBased = tools.$('.tree-based')[0];
		// 通过当前数据的pid来获取所有的父层数据
		var curTreeParents = getData.getParentData(cusTree.files, curPid);
		var basedHtml = '';
		if( curTreeParents.length ){ 
			for(var i = 0; i < curTreeParents.length; i++){
				basedHtml += `<a class="based" href="javascript:;" data-treeid="${curTreeParents[i].id}" data-treepid="${curTreeParents[i].pid}">${curTreeParents[i].title}</a>`
			} 
		}
		treeBased.innerHTML = basedHtml;
		var newSpan = document.createElement('span');
		newSpan.innerHTML = lastText;
		newSpan.className = 'based';
		treeBased.appendChild(newSpan);
	}

	// 生成选框
	var newDiv = null;
	var disX = 0, disY = 0; 
	tools.addEvent(document, 'mousedown', function(event){
		var ev = event || window.event,
			target = ev.target || ev.srcElement,
			targetClass = 'mod-files-list'; 
		 
		if( tools.hasClass(target, targetClass) || tools.parentsElement(target, '.'+targetClass) ){
			disX = ev.clientX;
			disY = ev.clientY; 
			tools.addEvent(document, 'mousemove', moveFn);
			tools.addEvent(document, 'mouseup', upFn); 
		} 
		// 阻止默认行为
		tools.cancelHandler(event);
	});
	// 鼠标移动 - 执行函数
	function moveFn(event){ 
		var ev = event || window.event;
		var w = ev.clientX - disX;
		var h = ev.clientY - disY;
		var range = 20;

		// 限定范围去生成
		if( Math.abs(w) > range || Math.abs(h) > range ){
			if(!newDiv){
				newDiv = document.createElement('div');
				newDiv.className = 'selectTab';
				document.body.appendChild(newDiv);
			}
			newDiv.style.width = Math.abs(w) + 'px';
			newDiv.style.height = Math.abs(h) + 'px';
			newDiv.style.left = Math.min(ev.clientX, disX) + 'px';
			newDiv.style.top = Math.min(ev.clientY, disY) + 'px';

			// 检查是否碰撞上了 
			collisionSelected();
			// 是否全选 
			hasSelectAll(); 
		} 
	}
	// 鼠标抬起 - 执行函数
	function upFn(){
		tools.removeEvent(document, 'mousemove', moveFn);
		tools.removeEvent(document, 'mouseup', upFn);
		if(newDiv){
			newDiv.remove();
			newDiv = null;
		} 
	}

	// 鼠标按下移动选取
	function collisionSelected(){
		var modFilesList = tools.$('.mod-files-list')[0],
			filesListLi = tools.$('li', modFilesList);
		for(var i=0;i<filesListLi.length;i++){
			var item = filesListLi[i];
			var hasCollision = tools.collisionRect(item, newDiv);
			var iconCheckbox = tools.$('.icon-checkbox', item)[0]; 

			if( hasCollision ){
				tools.addClass(item, 'cur');
				tools.addClass(iconCheckbox, 'icon-checkboxed');
			}else{
				tools.removeClass(item, 'cur');
				tools.removeClass(iconCheckbox, 'icon-checkboxed');
			}
		}
	}

	// 判断是否全选
	function hasSelectAll(){
		var modFilesList = tools.$('.mod-files-list')[0],
			filesListLi = tools.$('li', modFilesList),
			checked = 'icon-checkboxed',
			selectLen = tools.$('.' + checked, modFilesList).length, 
			checkAll = tools.$('#checkAll');
 
		tools.removeClass(checkAll, checked);
		if( selectLen == filesListLi.length ){  
			tools.addClass(checkAll, checked);
		} 
	}

	// 选中所有内容
	function selectAllCheck(hasAll){
		var modFilesList = tools.$('.mod-files-list')[0],
			filesListLi = tools.$('li', modFilesList),
			checked = 'icon-checkboxed',
			curClass = 'cur';
		
		for(var i=0;i<filesListLi.length;i++){
			var item = filesListLi[i];
			var curCheck = tools.$('.icon-checkbox', item)[0]; 
			if( hasAll ){
				tools.addClass(curCheck, checked);
				tools.addClass(item, curClass);
			}else{
				tools.removeClass(curCheck, checked);
				tools.removeClass(item, curClass);
			}
		} 
	}

}());