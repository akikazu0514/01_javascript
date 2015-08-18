$(function(){
	
	/*====================================================
		下記の【テスト】ではコールバックが出来るのですが
		【サンプル】だと一番最後に書いたスクリプトが
		優先	(test03)されてしましいtest01・test02の
		functionが上手く動きません。
		ご教示くださいますよう、お願い致します。
	====================================================*/
	
	
	/*=== サンプル =====================================================================*/
	
	function test01() {
		console.log('test01');
		$('#box').addClass('move01');
	}
	
	function test02() {
		console.log('test02');
		$('#box').removeClass('move01');
		$('#box').addClass('move02');
		return;
	}
	
	function test03() {
		console.log('test03');
		$('#box').removeClass('move02');
	}
	
	function playAnimation(){
		var promise = Promise.resolve();
		promise.then(test01).then(test02).then(test03).catch(function(error){
			//console.error(error);
		});
	}
	
	//ボタン
	$('button').on('click',function(){
		playAnimation();
	});

	
	/*=== テスト =====================================================================*/
	
	function test01(value) {
		console.log(value + '|test01');
		return value + 1;
	}
	
	function test02(value) {
		console.log(value + '|test02');
		return value + 1;
	}
	
	function test03(value) {
		console.log(value + '|test03');
	}
	
	function playAnimation(){
		var promise = Promise.resolve(1);
		promise.then(test01).then(test02).then(test03).catch(function(error){
			//console.error(error);
		});
	}
	
	//ボタン
	$('button').on('click',function(){
		playAnimation();
	});
	
	/*================================================================================*/
		
});