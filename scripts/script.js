// smooth scroll by tania rascia

$(document).ready(function(){
	AOS.init();
		
	$("a[href*='#']").click(function(e) {
		e.preventDefault();
		$("body, html").animate(
			{
				scrollTop: $($(this).attr("href")).offset().top
			},
			800,
			"linear"
		);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$(".backToTop").fadeIn();
		} else {
			$(".backToTop").fadeOut();
		}
	});

	$(".backToTop").click(function() {
		$("html, body").animate({ "scrollTop": 0 }, 700);
		return false;
	});

});
