// 用来处理页面模板的 - html 

// 渲染内容区域 
function filesContItem(fileData){ 
	var html = `
	<li data-treeid="${fileData.id}" data-treepid="${fileData.pid}">
		<div class="inner">
			<div class="icon-wrap"><i class="icon-files"></i></div>
			<span class="text">${fileData.title}</span>
			<em class="icon-checkbox"></em>
		</div>
	</li> 
	`;
	return html;
}

// 空白提示
function blankTipsTemplate(options){ 
	var html = `
	<div class="blank-tips">
		<i class="icon ${options.icon}"></i>
		<div class="title">${options.title}</div>
		<p class="des">${options.des}</p>
	</div> 
	`;
	return html;
}

// 准备树形菜单的HTML结构
function treeTemplate(data, pid) { 
	// 通过pid从总数据中, 查找到对应pid的子数据
	var fileData = getData.getChildByIdData(cusTree.files, pid);  
	var html = '<ul>'; 
	fileData.forEach(function(item){ 
		// 判断当前id下是否还有子数据
		var haschilds = getData.haschilds(data, item.id);
		// 如果没有子数据, 则添加class : tree-childs 
		var noChild = haschilds ? "" : "tree-childs"; 
		// 获取当前数据是在第几层
		var curLayer = getData.getCurDataLayer(data, item.id); 
		html += `
			<li>
				<div class="tree-item tree-open ${noChild}" data-treeid="${item.id}" data-treepid="${item.pid}" style="padding-left:${curLayer * 16}px;"> 
					<em class="icon"></em> ${item.title}
				</div>
				${treeTemplate(data, item.id)}  
			</li>  
		`;
	});  
	html += '</ul>';
	return html;
}
 





