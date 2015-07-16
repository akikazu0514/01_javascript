$(function() {

	/*
	バグが出たスクリプトです。下記の【テスト】だとスクリプトが機能しましたが、
	【Cタイプ】では、thisが効かず66行目【★】の一行が優先されてしまいます。
	理由が分かりませんので、回答よろしくお願いします。
	*/
	
	/*== Cタイプ ==================================================================*/
	
	function eventClass(w,h,mt,ml,flag){
		/*
		ローカル変数では変数を渡せないのでvarを削除
		※下記に書いた【テスト】のスクリプをベースにスクリプトを書きましたが
		何故かthisが効きません。
		*/
		//var
		_width = w + 'px',
		_height = h + 'px',
		_marginTop = mt + 'px',
		_marginLeft = ml + 'px';
		if(flag){
			this.$obj = $('.dataList_A .photo a img');
		}else{
			this.$obj = $('.dataList_B .photo a img');
		}
	}

	eventClass.prototype = {
			mouseOver:function(){
				this.$obj.mouseenter(function(){
					$(this).stop().animate({
						'width':_width,
						'height':_height,
						'marginTop':_marginTop,
						'marginLeft':_marginLeft,
						'left':'50%',
						'top':'50%',
						'position':'absolute'
						},'fast')
					});
				},
				
			mouseOut:function(){
				this.$obj.mouseleave(function(){
					$(this).stop().animate({
						'width':_width,
						'height':_height,
						'marginTop':_marginTop,
						'marginLeft':_marginLeft,
						'left':'50%',
						'top':'50%',
						'position':'absolute'
						},'fast')
					});
			}
	}
	
	var mouseEvent_over = new eventClass(260,260,-130,-130,true);
	var mouseEvent_out = new eventClass(200,200,-100,-100,true);
	
	mouseEvent_over.mouseOver();
	mouseEvent_out.mouseOut();/*←←←←←←←←←【★】変数名が違うのにマウスアウトが効きません(こちらが優先的に読みかまれます。)*/
	
	
	/*== 【テスト】 ====================================================================================*/
	
	function testFunc(t){
	  this.test = t;
	};
	
	// メソッド
	testFunc.prototype = {
	  over: function() {
		return this.test;
	  },
	  out: function() {
		return this.test;
	  }
	};
	
	var $test_over = new testFunc(1);
	var $test_out = new testFunc(2);
	
	//確認
	console.log($test_over.over());
	console.log($test_out.out());
	
});
