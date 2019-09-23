// smooth scroll by tania rascia

$(document).ready(function() {
	// animate on scroll
	AOS.init();

	// smooth scroll
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

	// scroll to top arrow visible after 100vh
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$(".backToTop").fadeIn();
		} else {
			$(".backToTop").fadeOut();
		}
	});

	// scroll to top function
	$(".backToTop").click(function() {
		$("html, body").animate({ scrollTop: 0 }, 700);
		return false;
	});

	// hamburger menu
	$(".hamburger").on("click", function() {
		$(".menu").toggleClass("show");
		$(".arrowDown").hide();
	});

	$(".exitMenu").on("click", function() {
		$(".menu").toggleClass("show");
		$(".arrowDown").show();
	});
});
