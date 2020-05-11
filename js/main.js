// Function Activation
$(document).ready(function(){
	scrollToSection();
    var mixer = mixitup(".protfolioContent");
    menuActiveElement();
    stickyMenu();
    new WOW().init();
    wowAnimation();
    
  

    
});

function stickyMenu () {
	window.onscroll = function() {myFunction()};

	var header = document.getElementById("mobile-menu");
	var sticky = header.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
	    header.classList.add("sticky");
	  } else {
	    header.classList.remove("sticky");
	  }
	}
}


function scrollToSection () {
	$(function() {
		$('.menu-item a , .menu-item i').bind('click',function(event){
	    event.preventDefault();
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000);
			event.preventDefault();
		});
	});
}




// Active Element
function menuActiveElement() {
    $(".menu-item li").on('click', function() {
        $(this).siblings().removeClass('menu-active');
        $(this).addClass('menu-active')
    })
}