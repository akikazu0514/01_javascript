$(function() {

	/*== Bタイプ ==================================================================*/
	
	function EventClass(obj){
		this.$obj = obj;
	}

	EventClass.prototype = {
			setMouseOver:function(w,h,mt,ml){
			this.$obj.mouseenter(function(){
					
					var
					_width = w + 'px',
					_height = h + 'px',
					_marginTop = mt + 'px',
					_marginLeft = ml + 'px';
				
				//このインデントは$(this)の先頭の$に対応させましょう。
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
			setMouseOut:function(w,h,mt,ml){
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
	
	var mouseEvent_A = new EventClass($('.dataList_A .photo a img'));
	mouseEvent_A.setMouseOver(260,260,-130,-130);
	mouseEvent_A.setMouseOut(200,200,-100,-100);
	
	var mouseEvent_B = new EventClass($('.dataList_B .photo a img'));
	mouseEvent_B.setMouseOver(180,180,-90,-90);
	mouseEvent_B.setMouseOut(149,149,-75,-75);
	
});
