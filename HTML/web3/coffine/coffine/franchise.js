$(document).ready(function(){
	$('#menu_gnb li, #sub, #bg').stop().mouseenter(function(){
		$('#sub').stop().slideDown();
		$('#bg').stop().slideDown();
	}).mouseleave(function(){
		$('#sub').stop().slideUp();
		$('#bg').stop().slideUp();
	})
	$('#sub ul').mouseenter(function(){
		$('#menu_gnb li').removeClass('on')
		$('#menu_gnb li').eq($(this).index()).addClass('on');
	}).mouseleave(function(){
		$('#menu_gnb li').removeClass('on')	
	})

})