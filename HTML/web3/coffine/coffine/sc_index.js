$(document).ready(function(){
	$('#menu_gnb>li').mouseenter(function(){
		$(this).find('.sub').stop().slideDown()	}).mouseleave(function(){
			$('.sub').stop().slideUp();
		});


})