$(function() {

	/*== Cタイプ ==================================================================*/
	
	function EventClass(obj,w,h,mt,ml){
		this.width = w + 'px',
		this.height = h + 'px',
		this.marginTop = mt + 'px',
		this.marginLeft = ml + 'px';
		this.$obj = obj;
	}

	EventClass.prototype = {
			setMouseOver:function(){
			this.$obj.mouseenter(function(){
				$(this).stop().animate({
					'width':this.width,
					'height':this.height,
					'marginTop':this.marginTop,
					'marginLeft':this.marginLeft,
					'left':'50%',
					'top':'50%',
					'position':'absolute'
					},'fast')
				});
			},
			setMouseOut:function(){
			this.$obj.mouseleave(function(){
				$(this).stop().animate({
					'width':this.width,
					'height':this.height,
					'marginTop':this.marginTop,
					'marginLeft':this.marginLeft,
					'left':'50%',
					'top':'50%',
					'position':'absolute'
					},'fast')
				});
			}
	}
	
	var mouseEvent_over = new EventClass($('.dataList_A .photo a img'),260,260,-130,-130,true);
	var mouseEvent_out = new EventClass($('.dataList_A .photo a img'),200,200,-100,-100,true);
	
	mouseEvent_over.setMouseOver();
	mouseEvent_out.setMouseOut();/*←←←←←←←←←【★】変数名が違うのにマウスアウトが効きません(こちらが優先的に読みかまれます。)*/
	
	
	/*== 【テスト】 ====================================================================================*/
	
	function TestFunc(t) {
	  this.test = t;
	};
	
	// メソッド
	TestFunc.prototype = {
		over:function() {
			return this.test;
		},
		out:function() {
			return this.test;
		}
	};
	
	var $test_over = new TestFunc(1);
	var $test_out = new TestFunc(2);
	
	//確認
	console.log($test_over.over());
	console.log($test_out.out());
	
});
