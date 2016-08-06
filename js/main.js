$( document ).ready(function() {
	$( "h3 a").click(function() {
		$( "nav" ).slideToggle( "slow", function() {
    // Animation complete.
  		});
		$( "nav" ).toggleClass("show-nav");
		});
  });