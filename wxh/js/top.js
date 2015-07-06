var php = {};
php.logo  = 
{
	init:function(){
		this.backToTop();
	},
	backToTop: function() {
				$("#back-top").hide();
				$(function() {
						$(window).scroll(function() {
								if ($(this).scrollTop() > 100) {
										$('#back-top').fadeIn();
								} else {
										$('#back-top').fadeOut();
								}
						});

						$('#back-top').click(function() {
								$('body,html').animate({
										scrollTop: 0
								},
								800);
								return false;
						});
				});
		}
		
}
php.logo.init();