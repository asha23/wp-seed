// Base Javascript

// Suppress Lint semicolon warnings
/* jshint asi: true */

jQuery(document).ready(function($) {

    // Gallery lightgallery-all

    $("#image-gallery").lightGallery();

    // Video lightgallery-all

    $("#video-gallery").lightGallery({
        thumbnail: false,
        videoMaxWidth: '90%',
        subHtml: '',
        fullScreen: false,
        youtubePlayerParams: {
            rel: 0
        }
    });

    // Share modal links
    $('.share-modal').click(function(ev) {

    	if($(window).width() > 600) {
		    ev.preventDefault();
	        window.open($(this).attr('href'), '', 'width=600,height=350');
	    } else {
	    	window.open($(this).attr('href'));
	    }

	});

});
