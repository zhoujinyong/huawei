window.onload=function(){
	var box=getclass('banner1',document);
	var as=box[0].getElementsByTagName('img')
	var bodians=getclass('bodianbox',document);
	var bodiandiv=bodians[0].getElementsByTagName('div');
	var xuanze=getclass('box2a',document)[0];
	var leftclick=getclass('left',box[0]);
	var rightclick=getclass('right',box[0]);
	as[0].style.zIndex=10;
	bodiandiv[0].style.background='#fff';
	xuanze.style.zIndex='0'
		var index=0;
		t=setInterval(move,2000);
		function move(){
			index++;
			if (index==as.length) {
				index=0;
			};
			for (var i = 0; i < as.length; i++) {
				as[i].style.zIndex=0;
				bodiandiv[i].style.background='';
			};
			as[index].style.zIndex=10;
			bodiandiv[index].style.background='#fff';
		};
		box[0].onmouseover=function(){
			clearInterval(t);
			xuanze.style.zIndex='15'
		};
		box[0].onmouseout=function(){
			t=setInterval(move,2000);
			xuanze.style.zIndex='0'
		};
		for (var i = 0; i < bodiandiv.length; i++) {
			bodiandiv[i].index=i
		bodiandiv[i].onclick=function(){
	for (var j = 0; j < as.length; j++) {
		as[j].style.zIndex='0';
		bodiandiv[j].style.background=''
		};
		as[this.index].style.zIndex='10';
		bodiandiv[this.index].style.background='#fff'	
		}
	};
	rightclick[0].onclick=function(){
		move();
	};
	leftclick[0].onclick=function(){
		index--;
		if (index<0) {index=as.length-1};
		for (var i = 0; i < as.length; i++) {
			as[i].style.zIndex='0';
			bodiandiv[i].style.background=''
		};
		as[index].style.zIndex='10';
			bodiandiv[index].style.background='#fff'
	}
		rightclick[0].onmouseover=function(){
			rightclick[0].style.background='#cc477a';
		}
		rightclick[0].onmouseout=function(){
			rightclick[0].style.background='';
		}
		leftclick[0].onmouseover=function(){
			leftclick[0].style.background='#cc477a';
		}
		leftclick[0].onmouseout=function(){
			leftclick[0].style.background='';
		}
};