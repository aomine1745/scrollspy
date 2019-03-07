/*ScrollSpy*/
(function(){
	var navLinks = $('nav div ul li a'),
	navH = $('nav').height(),
	section = $('section'),
	documentEl = $(document);
	documentEl.on('scroll', function() {
		var currentScrollPos = documentEl.scrollTop();
		section.each(function(){
			var self = $(this);
			if ( self.offset().top <= (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight()) ) {
				var targetCLass = '.' + self.attr('id') + '-marker';
				navLinks.removeClass('active');
				$(targetCLass).addClass('active');
			}
		});
		// Cambio de color
		if (currentScrollPos > navH) {
			$('nav').addClass("bg-blue");
		} else {
			$('nav').removeClass("bg-blue");
		}
	});
})();