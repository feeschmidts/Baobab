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
		tpl: '<div id="fancybox-soundclip"><object height="81" width="100%">'
			+'<param name="movie" value="SOUNDCLIP_URL"></param>'
			+'<param name="allowscriptaccess" value="always"></param>'
			+'<embed allowscriptaccess="always" height="81" src="SOUNDCLIP_URL" type="application/x-shockwave-flash" width="100"></embed>'
			+'</object></div>',
		list: null,
				
		afterShow: function (opts) {
			if (!this.list) {
				var tpl = opts.tpl || this.tpl;
				var html = tpl.replace("SOUNDCLIP_URL", opts.soundclip);
				this.list = $(html).addClass(opts.position || 'top').appendTo('body');
			}
		},
				
		beforeClose: function () {
			if (this.list) {
				this.list.remove();
			}

			this.list = null;
		}
	
	}
	

}(jQuery));