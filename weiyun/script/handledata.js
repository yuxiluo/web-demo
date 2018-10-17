/*
 * 数据结构进行操作
 * 1. 获取数据
 * 2. 获取所有父数据
 * 3. 删除数据
 */
 
var getData = {
	// 获取指定id下的数据
	getChildByIdData: function(data, id){
		var result = [];
		for(var i = 0; i < data.length; i++){ 
			if( data[i].pid == id ){ 
				result.push(data[i]);
			}
		}
		return result;
	},
	// 判断当前id下是否有子数据
	haschilds: function(data, pid){
		return getData.getChildByIdData(data, pid).length !== 0;
	},
	// 获取当前Pid的父数据
	getParentData: function(data, pid){
		var result = []; 
		for(var i = 0; i < data.length; i++){  
			if( data[i].id == pid ){ 
				result.unshift(data[i]);
				var lastParent = getData.getParentData(data, data[i].pid);
				result = lastParent.concat(result); 
				break;
			} 
		}
		return result;
	},
	// 获取当前数据是第几层
	getCurDataLayer: function(data, pid) {
		return getData.getParentData(data, pid).length - 1;
	},
	// 获取数据中第一个顶层数据
	getTopLayerData: function(data, pid){
		var result; 
		for(var i = 0; i < data.length; i++){  
			if( data[i].pid == pid ){ 
				result = data[i];
				break; // 跳出循环
			} 
		}
		return result;
	}

}