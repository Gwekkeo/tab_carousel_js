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




});