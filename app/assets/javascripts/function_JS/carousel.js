$(document).ready(function(){
	var nb_actuel = 0;
	var nb_photo = 2;

	$('img').hide();
	$('img').first().show();		// 1)WUKONG
	// $('img:eq(1)').show();		// 2)GNAR
	// $('img').last().show();		// 3)EKKO

	$('.before').on('click', function(){
		$('img').hide();

		if ( nb_actuel <=0 ){
			$('img').last().show();
			nb_actuel = 2;
		}
		else{
			nb_actuel -= 1;
			$('img:eq('+nb_actuel+')').show();
		}

	});


	$('.after').on('click', function(){
		$('img').hide();

		if (nb_actuel >= nb_photo){
			nb_actuel = 0;
			$('img').first().show();
		}
		else{
			nb_actuel += 1;
			$('img:eq('+nb_actuel+')').show();
		}
	});

});