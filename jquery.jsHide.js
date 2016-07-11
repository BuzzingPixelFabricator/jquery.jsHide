/**
 * jQuery js hide
 *
 * @package jquery.jsHide
 * @author TJ Draper <tj@buzzingpixel.com>
 * @version 1.0.0
 */

(function($) {
	$.fn.jsHide = function() {
		this.addClass('js-hide');
		return this;
	};

	$.fn.jsShow = function() {
		this.removeClass('js-hide');
		return this;
	};
})(window.jQuery);
