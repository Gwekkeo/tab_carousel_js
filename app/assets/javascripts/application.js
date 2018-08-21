//= require jquery3
//= require jquery_ujs

//= require rails-ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	var nb_actuel = 0;
	var nb_photo = 2;

	$('.img').hide();
	$('.img').first().show();

	// BOUTON PREVIOUS
	$('.previous').on('click', function(){
		$('.img').hide();

		if ( nb_actuel <=0 ){
			$('.img').last().show();
			nb_actuel = 2;
		}
		else{
			nb_actuel -= 1;
			$('.img:eq('+nb_actuel+')').show();
		}
		$('.btn-circle').removeClass('active');
		$('.btn-circle').eq(nb_actuel).addClass('active');
	});

	// BOUTON NEXT
	$('.next').on('click', function(){
		$('.img').hide();

		if (nb_actuel >= nb_photo){
			nb_actuel = 0;
			$('.img').first().show();
		}
		else{
			nb_actuel += 1;
			$('.img:eq('+nb_actuel+')').show();
		}
		$('.btn-circle').removeClass('active');
		$('.btn-circle').eq(nb_actuel).addClass('active');
	});


	// CIRCLE BOUTON
	$('.btn1').on('click', function(){
		$('.img').hide();
		$('.img').first().show();

		$('.btn-circle').removeClass('active');
		$(this).addClass('active');
		nb_actuel = 0;
	});

	$('.btn2').on('click', function(){
		$('.img').hide();
		$('.img').eq(1).show();

		$('.btn-circle').removeClass('active');
		$(this).addClass('active');
		nb_actuel = 1;
	});

	$('.btn3').on('click', function(){
		$('.img').hide();
		$('.img').last().show();

		$('.btn-circle').removeClass('active');
		$(this).addClass('active');
		nb_actuel = 2;
	});


	$('.target').hide();
	$('.target:eq(0)').show();
	

	$('.show1').on('click', function(){
		$('.target').hide();

		$('.show').removeClass('active');
		$(this).toggleClass('active');

		$('.target').first().show(250);
	});

	$('.show2').on('click', function(){
		$('.target').hide();

		$('.show').removeClass('active');
		$(this).toggleClass('active');

		$('.target:eq(1)').show(250);
	});

	$('.show3').on('click', function(){
		$('.target').hide();

		$('.show').removeClass('active');
		$(this).toggleClass('active');

		$('.target').last().show(250);
	});


});