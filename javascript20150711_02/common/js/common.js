$(function(){
	
	var
	$gNav = $('nav li a'),
	$pageNumber = $('nav li a').length,//ナビゲーションの数
	pageCount = 1,//ページの初期設定
	oldPage = 0,//古いページの初期設定
	timer = 3000,//ページ切り替えのスピード
	timerStop;//clearTimeoutのグローバル変数
	
	//ページの切り替え
	function pageCangeFunc(newPage,overTimeStop){
		
		//マウスオーバーの時に時間をストップ
		if(overTimeStop) return;
		timeFunc();
		
		var
		page = pageCount++,
		newPage = page % $pageNumber;//余り計算で数字のループ処理
		
		$('#scene' + oldPage).removeClass('pageIn');
		$('#scene' + newPage).addClass('pageIn');
		oldPage = newPage;
		console.log("time" + newPage);	
	}
	
	//時間の管理
	function timeFunc(timeTest){
		timerStop = setTimeout(function() {
			pageCangeFunc();
		},timer);
	}
	
	//発火
	timeFunc();
	
	//mousemoveevent
	$gNav.each(function(index) {
		$(this).mouseover(function(){
			clearTimeout(timerStop);
			var over = true;
			pageCangeFunc(index,over);
			
			newPage = index;
			$('#scene' + oldPage).removeClass('pageIn');
			$('#scene' + newPage).addClass('pageIn');
			oldPage = newPage;
			
			console.log("over" + newPage);	 
		})
		.mouseout(function(){
			timeFunc();
		});
    });
	
	
	
});




