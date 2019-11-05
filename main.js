$('.navbar-nav .nav-item a').on('click', function () {
	$('.navbar-nav').find('li.active').removeClass('active');
	$('.navbar-brand').removeClass('active');
	$(this).parent('li').addClass('active');
});
$('.navbar-brand').on('click', function () {
	$('.navbar-nav').find('li.active').removeClass('active');
	$(this).addClass('active');
});
