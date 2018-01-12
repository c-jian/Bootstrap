$(function(){

	
	/********section-2 图片文字随滚动条滚动显示隐藏效果********/

	var list=$('.list'),	//所有list
		area={'up':[],'down':[]},	//保存滚动时的判断条件
		windowH=$(window).height(),	//可视区高
		listLeft=[],	//保存list左侧图片元素
		listBody=[];	//保存list右侧文字主体元素

	
	getTop();//获取当前分辨率各个list的top值

	function getTop(){

	
		//获取距离top的值
		list.each(function(index,ele){
			var ele=$(ele);
			//+110 -100是延迟动画或提前动画
			area.up.push(ele.offset().top-windowH+110);
			area.down.push(ele.offset().top-windowH-100);
			listLeft.push(ele.find('.list-left').get(0));
			listBody.push(ele.find('.list-body').get(0));
		})
		
	}


	$(window).on('resize',getTop);//当分辨率发生改变时重新获取

	var len=area.up.length;

	move();//初始化，以应对不同分辨率下getTop值不同

	$(window).scroll(move);//滚动条滚动时

	function move(){

		var st=$(window).scrollTop();
		
		for(var i=0;i<len;i++){

			if(st>area.down[i]){
				list.css({'opacity':1})

				if(i%2!=0){
					//图片在右侧
					listLeft[i].className='list-left pull-right animated bounceInRight';
				}else{
					//图片在左侧
					listLeft[i].className='list-left animated bounceInLeft';
				}
				listBody[i].className='list-body animated fadeIn';
			}
			if(st<area.up[i]){
				if(i%2!=0){
					listLeft[i].className='list-left pull-right animated bounceOutRight';
				}else{
					listLeft[i].className='list-left animated bounceOutLeft';
				}
				listBody[i].className='list-body animated fadeOut';
			}

		}

		/****iphone****/
		if(st>$('#mobile').offset().top-$(window).height()){
			$('.iphone').addClass('animated bounceInRight');
		}else{
			$('.iphone').removeClass('animated bounceInRight');
		}
		/******iphone-end********/

	}

	/********section-2 图片文字随滚动条滚动显示隐藏效果-end********/


	/********section-6 轮播图控制点功能*******/

	// $('.control li').on('click',function(){
	// 	$('.control li').removeClass('active');
	// 	$(this).addClass('active');

	// 	var winW=$(window).width(),
	// 		listBoxW=winW/2,
	// 		listW=(listBoxW*3)/2,
	// 		w=listW-listBoxW+25*3
		
	// 		var l=listBoxW-listBoxW/2;
	// 		console.log(l*3+listBoxW/2)
	// 		//$('.people-box').css({'margin-left':3*(-l-25*3)});

	// })


	/********section-6 轮播图控制点功能-end*******/
})