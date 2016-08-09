$( document ).ready(function() {
	$( "h3 a").click(function() {
		event.preventDefault();
		$( "nav" ).slideToggle( "slow", function() {
    // Animation complete.
  		});
		$( "nav" ).toggleClass("show-nav");
		});
  });

lightbox.option({
      'resizeDuration': 500
    });
lightbox.option({
      'showImageNumberLabel': false
    });
lightbox.option({
      'wrapAround': true
    });