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
			+'<param name="movie" value="https://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F43814758&amp;show_comments=true&amp;auto_play=false&amp;color=ff7700"></param>'
			+'<param name="allowscriptaccess" value="always"></param>'
			+'<embed allowscriptaccess="always" height="81" src="https://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F43814758&amp;show_comments=true&amp;auto_play=false&amp;color=ff7700" type="application/x-shockwave-flash" width="100"></embed>'
			+'</object></div>',
		list: null,
				
		afterShow: function (opts) {
			if (!this.list) {
				this.list = $(opts.tpl || this.tpl).addClass(opts.position || 'top').appendTo('body');
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