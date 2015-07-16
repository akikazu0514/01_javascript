$(function() {

	/*== Bタイプ ==================================================================*/
	
	function eventClass(test){
		if(test){
			this.$obj = $('.dataList_A .photo a img');
		}else{
			this.$obj = $('.dataList_B .photo a img');
		}
	}

	eventClass.prototype = {
			mouseOver:function(w,h,mt,ml){
				this.$obj.mouseenter(function(){
					
					var
					_width = w + 'px',
					_height = h + 'px',
					_marginTop = mt + 'px',
					_marginLeft = ml + 'px';
					
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
				
			mouseOut:function(w,h,mt,ml){
				this.$obj.mouseleave(function(){
					
					var
					_width = w + 'px',
					_height = h + 'px',
					_marginTop = mt + 'px',
					_marginLeft = ml + 'px';
					
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
	
	var mouseEvent_A = new eventClass(true);
	mouseEvent_A.mouseOver(260,260,-130,-130);
	mouseEvent_A.mouseOut(200,200,-100,-100);
	
	var mouseEvent_B = new eventClass(false);
		mouseEvent_B.mouseOver(180,180,-90,-90);
		mouseEvent_B.mouseOut(149,149,-75,-75);

	
});
