$(function(){
	
	var
	$gNav = $('nav li a'),
	$pageNumber = $('nav li a').length,//ナビゲーションの数
	pageCount = 0,//ページの初期設定
	oldPage = 0,//古いページの初期設定
	timer = 1000,//ページ切り替えのスピード
	timerStop;//clearTimeoutのグローバル変数
	
	//ページの切り替え
	function pageCangeFunc(newPage,overTimeStop){
		
		var page = pageCount++,
			newPage = page % $pageNumber;//余り計算で数字のループ処理
			
		$('section div').not('#scene' + oldPage).removeClass('pageIn');
		console.log(oldPage);
		$('#scene' + newPage).addClass('pageIn');
		oldPage = newPage;
		
		//マウスオーバーの時に時間をストップ
		if(overTimeStop) return;
		timeFunc();
	}
	
	//時間の管理
	function timeFunc(){
		timerStop = setTimeout(function() {
			pageCangeFunc();
		}, timer);
	}
	
	//発火
	timeFunc();
	
	//mousemoveevent
	$gNav.each(function(index) {
		$(this).mouseover(function(){
			clearTimeout(timerStop);
			var over = true;
			pageCangeFunc(index,over);
				 
		})
		.mouseout(function(){
			timeFunc();
		});
    });
	
	
	
});




