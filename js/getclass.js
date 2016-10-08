function getclass(classname,range){
	if (document.getElementsByClassName) {
		return range.getElementsByClassName(classname);
	}else{
		var all=range.getElementsByTagName('*')
		var arr=[];
		for (var i = 0; i < all.length; i++) {
			if (all[i].className==classname) {
				arr.push(all[i])
			};
		};
		return arr;
	}
}