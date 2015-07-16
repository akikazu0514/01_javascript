$(function() {
	/*=============================================================================
	
		今回、CSSアニメーションでは無いですが
		同じ動きで【width】【height】【marginTop】【marginLeft】の値が違うだけなので、
		一つに纏めようと思い2つのスクリプトを書きましたのでご確認宜しくお願い致します。
		
	===============================================================================*/
	
	/*== Aタイプ ==================================================================*/
	
	/*
	まずは、動きの確認です。
	同じ様なスクリプトが重なってしまうので、効率化が悪いと思うスクリプトです。
	*/
	
	var $objPhotoA = $('.dataList_A .photo a img');//大きい写真（上部）
	var $objPhotoB = $('.dataList_B .photo a img');//小さい写真（下部）
	
	//大きい写真
	$objPhotoA.hover(
		function(){
			$(this).stop().animate({
				'width':'260px',/*←ここだけ値を変更*/
				'height':'260px',/*←ここだけ値を変更*/
				'marginTop':'-130px',/*←ここだけ値を変更*/
				'marginLeft':'-130px',/*←ここだけ値を変更*/
				'left':'50%',
				'top':'50%',
				'position':'absolute'
				},'fast')
			},
		function(){
			$(this).stop().animate({
				'width':'200px',/*←ここだけ値を変更*/
				'height':'200px',/*←ここだけ値を変更*/
				'marginTop':'-100px',/*←ここだけ値を変更*/
				'marginLeft':'-100px',/*←ここだけ値を変更*/
				'left':'50%',
				'top':'50%',
				'position':'absolute'
			},'fast')
		});
	
	//小さい写真
	$objPhotoB.hover(
		function(){
			$(this).stop().animate({
				'width':'180px',/*←ここだけ値を変更*/
				'height':'180px',/*←ここだけ値を変更*/
				'marginTop':'-90px',/*←ここだけ値を変更*/
				'marginLeft':'-90px',/*←ここだけ値を変更*/
				'left':'50%',
				'top':'50%',
				'position':'absolute'
				},'fast')
			},
		function(){
			$(this).stop().animate({
				'width':'149px',/*←ここだけ値を変更*/
				'height':'149px',/*←ここだけ値を変更*/
				'marginTop':'-75px',/*←ここだけ値を変更*/
				'marginLeft':'-75px',/*←ここだけ値を変更*/
				'left':'50%',
				'top':'50%',
				'position':'absolute'
			},'fast')
		});
		
});
