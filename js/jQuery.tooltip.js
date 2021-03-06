(function($) {
	$.fn.tooltip = function(options) {
		var defaults = {
			background: '#e3e3e3',
			color: '#000',
			rounded: false
		}, settings = $.extend({}, defaults, options);

		this.each(function() {
			var $this = $(this),
				title = this.title;

			if($this.is('a') && $this.attr('title') != '') {
				this.title = '';
				$this.hover(function(e) {
					// mouse over
					$('<div id="tooltip">')
						.appendTo('body')
						.hide()
						.text(title)
						.css({
							backgroundColor: settings.background,
							color: settings.color,
							top: e.pageY + 10,
							left: e.pageX + 20
						}).fadeIn(350);

					if(settings.rounded) {
						$('#tooltip').addClass('rounded');
					}
				}, function() {
					// mouse out
					$('#tooltip').remove();
				});
			}

			$this.mousemove(function(e) {
				$('#tooltip').css({
					top: e.pageY + 10,
					left: e.pageX + 20
				});
			});
		});
		// returns the jQuery object to allow for chainability
		return this;
	}
})(jQuery);