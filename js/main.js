jQuery(document).ready(function(){

//=================================
// HEADING IMAGE SLIDER BACKGROUND
//=================================

	(function($) {

    'use strict';

    var $slides = $('[data-slides]');
    var images = $slides.data('slides');
    var count = images.length;
    var slideshow = function() {
        $slides
        	//randomly loops through images
            .css('background-image', 'url("' + images[Math.floor(Math.random() * count)] + '")')
            .show(0, function() {
                setTimeout(slideshow, 4000);
            });
    };

    slideshow();

}(jQuery));


//=================================
//          STICKY NAVBAR
//=================================

	var navOffset = jQuery("nav").offset().top;
	var logoFadeElem = $(".logo");

	jQuery("nav").wrap('<div class="nav-placeholder"></div>');
	jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());

	jQuery(window).scroll(function(){
		var scrollPos = jQuery(window).scrollTop();

		if(scrollPos >= navOffset){
			jQuery("nav").addClass("fixed");
			jQuery("div.logo").removeClass("hidden");
			jQuery("#li-logo").addClass("hidden");
			jQuery("nav").removeClass("nav-bottom");
		}
		else{
			jQuery("nav").removeClass("fixed");
			jQuery("div.logo").addClass("hidden");
			jQuery("#li-logo").removeClass("hidden");
			jQuery("nav").addClass("nav-bottom");
		}
	});

//=================================
//        DROPDOWN NAVBAR
//=================================




});