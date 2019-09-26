$(document).scroll(function() {
	if ($(document).scrollTop() > 400) {
		$('#toTop').css("display", "block");
	} else {
		$('#toTop').css("display", "none");
	}
});

$('#toTop').on('click', function(e) {
  $('html,body').animate({
    scrollTop: 0
  }, 500);
});