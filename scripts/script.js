// smooth scroll by tania rascia
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