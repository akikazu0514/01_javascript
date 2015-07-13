$(function(){


//aaaaa
	var
	$gNav = $('nav li a'),
	$content = $('section div');

	$gNav.each(function(newId){
		$(this).mouseover(function(){
			$('#scene' + newId).addClass('pageIn');
			$content.not('#scene' + newId).removeClass('pageIn');
		});
	});
	
	//上記ご確認よろしくお願いします。
	
	/*
	$gNav.each(function(newId){
		$(this).mouseover(function(){
			$('#scene' + newId).addClass('pageIn');
			$content.not('#scene' + newId).removeClass('pageIn');
		});
	});
	*/
	
});
