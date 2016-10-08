//ie浏览器6-8不兼容className;
//解决兼容性问题

function getClass(classname,range){
	if(document.getElementsByClassName==classname){
	//查找是否有该函数，如果有，返回该标签){
		return range .getElementsByClassName(classname);
	}else{
		var biao=range.getElementsByTagName("*");
		//在document的范围内查找所有通用标签
		var arr=[];
		for(var i=0;i<biao.length;i++){
		//遍历查找到的所有的通用标签
			if(biao[i].className==classname){
			//如果查找到的标签的类名与参数的类名相同，就将返回这些类名的标签
				arr.push(biao[i])
				//将这些标签添加到一个数组中（因为查找到的标签是以类数组的形式存在的）
			}
		}
		return arr;

	}
}