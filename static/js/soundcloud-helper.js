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
			+'<param name="movie" value="https://player.soundcloud.com/player.swf?url=SOUNDCLIP_URL&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700"></param>'
			+'<param name="allowscriptaccess" value="always"></param>'
			+'<embed allowscriptaccess="always" height="81" src="https://player.soundcloud.com/player.swf?url=SOUNDCLIP_URL&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700" type="application/x-shockwave-flash" width="100"></embed>'
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