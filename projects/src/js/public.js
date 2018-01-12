$(function(){

	//导航栏点击active
	$('#nav .nav-list a').on('click',function(){

		$('#nav .nav-list a').removeClass('active');
		$(this).addClass('active');

	})


	/*********section-6 boss栏轮播自动宽度效果*********/	
	var listH=textH=0,
		peopleList=$('.people-list'),
		maxListH=peopleList.height(),
		sign=true;

	/*********section-6 boss栏轮播自动宽度效果-end*********/

	carousel();

	$(window).on('resize',carousel);

	function carousel(){

		/*********section-6 boss栏轮播自动宽度效果*********/
		
		var windowW=$(window).width(),
			boxW=windowW/2,
			peopleListW=(boxW*3)/2,
			maxH=peopleList.find('.text').eq(0).height(),
			offLeft=peopleListW-boxW+25*3;

		peopleList.css({'width':boxW});
		$('.people-box').css({'margin-left':-offLeft});

		if(windowW+17<769){//+17是与期望值相差17
			peopleList.css({'width':windowW});
			$('.people-box').css({'width':windowW*4});
			$('.people-box').css({'margin-left':-windowW-25*3});
		}

		peopleList.find('.text').each(function(index,ele){
			var h=$(ele).height();
			if(h>maxH){
				maxH=h;
			}
		})

		if(sign){

			peopleList.each(function(index,ele){
				var h=$(ele).height();
				if(h>maxListH){
					maxListH=h;
				}
			})

			textH=maxH;
			listH=maxListH;
			sign=false;

		}

		peopleList.css({'height':(listH+78)+maxH-textH});//78是上下padding的和
		
		/*********section-6 boss栏轮播自动宽度效果-end*********/

	}


})