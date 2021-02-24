$(document).ready(function(){
	
	// init Isotope start
	var $grid = $('.item-details').isotope({
  	// options
	});
	// filter items on button click
	$('.item-menu').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
	});
	// Isotope end
	// owl carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})
	// magnific start

	$('.image').magnificPopup({
		type:'image'
	});


  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });

})