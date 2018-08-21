$(document).ready(function(){
	$('.target').hide();
	$('.target:eq(0)').show();
	

	$('.show1').on('click', function(){
		$('.target').hide();

		$('.show').removeClass('active');
		$(this).toggleClass('active');

		$('.target').first().show();
	});

	$('.show2').on('click', function(){
		$('.target').hide();

		$('.show').removeClass('active');
		$(this).toggleClass('active');

		$('.target:eq(1)').show();
	});

	$('.show3').on('click', function(){
		$('.target').hide();

		$('.show').removeClass('active');
		$(this).toggleClass('active');

		$('.target').last().show();
	});

});