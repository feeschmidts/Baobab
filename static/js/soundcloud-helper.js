 /*!
 * Soundcloud helper for fancyBox
 * version: 1.0.0
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         soundcloud: {}
 *     });
 *
 */
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add soundcloud object
	F.helpers.soundcloud = {
	
		afterShow: function (opts) {
			if (!$('#stratus').length) {
				$.stratus({
					auto_play: true,
	      			download: false,
	      			links: opts.soundclip
	      		});
	      	}
		},
				
		beforeClose: function () {
			if ($('#stratus').length) {
				$('#stratus').remove();
			}
		}
	
	}
	

}(jQuery));