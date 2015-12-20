
//jQuery page loader
$(window).load(function() {
	$(".loader").fadeOut("slow");
})



$(document).ready(function(){

    
	

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});



//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// Animate
jQuery(function($){
	$(document).ready(function(){




// bounce
		
	$('.animate-bounce').waypoint(function() {
		$('.animate-bounce').addClass('animated bounce');
	}, {
		offset: '75%'
	});
	
// flash
		
	$('.animate-flash').waypoint(function() {
		$('.animate-flash').addClass('animated flash');
	}, {
		offset: '75%'
	});
	
// pulse
		
	$('.animate-pulse').waypoint(function() {
		$('.animate-pulse').addClass('animated pulse');
	}, {
		offset: '75%'
	});
	
// rubberBand
		
	$('.animate-rubberBand').waypoint(function() {
		$('.animate-rubberBand').addClass('animated rubberBand');
	}, {
		offset: '75%'
	});
	
// shake
		
	$('.animate-shake').waypoint(function() {
		$('.animate-shake').addClass('animated shake');
	}, {
		offset: '75%'
	});
	
// swing
		
	$('.animate-swing').waypoint(function() {
		$('.animate-swing').addClass('animated swing');
	}, {
		offset: '75%'
	});

// tada
		
	$('.animate-tada').waypoint(function() {
		$('.animate-tada').addClass('animated tada');
	}, {
		offset: '75%'
	});
	
// wobble
		
	$('.animate-wobble').waypoint(function() {
		$('.animate-wobble').addClass('animated wobble');
	}, {
		offset: '75%'
	});
	
// bounceIn
		
	$('.animate-bounceIn').waypoint(function() {
		$('.animate-bounceIn').addClass('animated bounceIn');
	}, {
		offset: '75%'
	});
	
// bounceInDown
		
	$('.animate-bounceInDown').waypoint(function() {
		$('.animate-bounceInDown').addClass('animated bounceInDown');
	}, {
		offset: '75%'
	});
	
// bounceInLeft	
		
	$('.animate-bounceInLeft').waypoint(function() {
		$('.animate-bounceInLeft').addClass('animated bounceInLeft');
	}, {
		offset: '75%'
	});
	
// bounceInRight
		
	$('.animate-bounceInRight').waypoint(function() {
		$('.animate-bounceInRight').addClass('animated bounceInRight');
	}, {
		offset: '75%'
	});
	
// bounceInUp
		
	$('.animate-bounceInUp').waypoint(function() {
		$('.animate-bounceInUp').addClass('animated bounceInUp');
	}, {
		offset: '75%'
	});
	
// bounceOut
		
	$('.animate-bounceOut').waypoint(function() {
		$('.animate-bounceOut').addClass('animated bounceOut');
	}, {
		offset: '75%'
	});
	
// bounceOutDown
		
	$('.animate-bounceOutDown').waypoint(function() {
		$('.animate-bounceOutDown').addClass('animated bounceOutDown');
	}, {
		offset: '75%'
	});
	
// bounceOutLeft
		
	$('.animate-bounceOutLeft').waypoint(function() {
		$('.animate-bounceOutLeft').addClass('animated bounceOutLeft');
	}, {
		offset: '75%'
	});
	
// bounceOutRight
		
	$('.animate-bounceOutRight').waypoint(function() {
		$('.animate-bounceOutRight').addClass('animated bounceOutRight');
	}, {
		offset: '75%'
	});
	
// bounceOutUp
		
	$('.animate-bounceOutUp').waypoint(function() {
		$('.animate-bounceOutUp').addClass('animated bounceOutUp');
	}, {
		offset: '75%'
	});
	
// fadeIn
		
	$('.animate-fadeIn').waypoint(function() {
		$('.animate-fadeIn').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});
	
// fadeInDown
		
	$('.animate-fadeInDown').waypoint(function() {
		$('.animate-fadeInDown').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});	

// fadeInDownBig
		
	$('.animate-fadeInDownBig').waypoint(function() {
		$('.animate-fadeInDownBig').addClass('animated fadeInDownBig');
	}, {
		offset: '75%'
	});	
	
// fadeInLeft
		
	$('.animate-fadeInLeft').waypoint(function() {
		$('.animate-fadeInLeft').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});	
	
// fadeInLeftBig
		
	$('.animate-fadeInLeftBig').waypoint(function() {
		$('.animate-fadeInLeftBig').addClass('animated fadeInLeftBig');
	}, {
		offset: '75%'
	});	
	
// fadeInRight
		
	$('.animate-fadeInRight').waypoint(function() {
		$('.animate-fadeInRight').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});	
	
// fadeInRightBig
		
	$('.animate-fadeInRightBig').waypoint(function() {
		$('.animate-fadeInRightBig').addClass('animated fadeInRightBig');
	}, {
		offset: '75%'
	});	
	

	
// fadeInUp		
		
	$('.animate-fadeInUp').waypoint(function() {
		$('.animate-fadeInUp').addClass('animated fadeInUp');
	}, {

		offset: '75%',
		
	});

// fadeInUpBig	
		
	$('.animate-fadeInUpBig').waypoint(function() {
		$('.animate-fadeInUpBig').addClass('animated fadeInUpBig');
	}, {
		offset: '75%'
	});
	
// fadeOut	
		
	$('.animate-fadeOut').waypoint(function() {
		$('.animate-fadeOut').addClass('animated fadeOut');
	}, {
		offset: '75%'
	});
	
// fadeOutDown	
		
	$('.animate-fadeOutDown').waypoint(function() {
		$('.animate-fadeOutDown').addClass('animated fadeOutDown');
	}, {
		offset: '75%'
	});
	
// fadeOutDownBig
		
	$('.animate-fadeOutDownBig').waypoint(function() {
		$('.animate-fadeOutDownBig').addClass('animated fadeOutDownBig');
	}, {
		offset: '75%'
	});
	
// fadeOutLeft
		
	$('.animate-fadeOutLeft').waypoint(function() {
		$('.animate-fadeOutLeft').addClass('animated fadeOutLeft');
	}, {
		offset: '75%'
	});
	
// fadeOutLeftBig
		
	$('.animate-fadeOutLeftBig').waypoint(function() {
		$('.animate-fadeOutLeftBig').addClass('animated fadeOutLeftBig');
	}, {
		offset: '75%'
	});
	
// fadeOutRight
		
	$('.animate-fadeOutRight').waypoint(function() {
		$('.animate-fadeOutRight').addClass('animated fadeOutRight');
	}, {
		offset: '75%'
	});
	
// fadeOutRightBig
		
	$('.animate-fadeOutRightBig').waypoint(function() {
		$('.animate-fadeOutRightBig').addClass('animated fadeOutRightBig');
	}, {
		offset: '75%'
	});
	
// fadeOutUp
		
	$('.animate-fadeOutUp').waypoint(function() {
		$('.animate-fadeOutUp').addClass('animated fadeOutUp');
	}, {
		offset: '75%'
	});
	
// fadeOutUpBig
		
	$('.animate-fadeOutUpBig').waypoint(function() {
		$('.animate-fadeOutUpBig').addClass('animated fadeOutUpBig');
	}, {
		offset: '25%'
	});
	
// flip
		
	$('.animate-flip').waypoint(function() {
		$('.animate-flip').addClass('animated flip');
	}, {
		offset: '75%'
	});
	
// flipInX
		
	$('.animate-flipInX').waypoint(function() {
		$('.animate-flipInX').addClass('animated flipInX');
	}, {
		offset: '75%'
	});
	
// flipInY
		
	$('.animate-flipInY').waypoint(function() {
		$('.animate-flipInY').addClass('animated flipInY');
	}, {
		offset: '75%'
	});
	
// flipOutX
		
	$('.animate-flipOutX').waypoint(function() {
		$('.animate-flipOutX').addClass('animated flipOutX');
	}, {
		offset: '75%'
	});
	
//flipOutY
		
	$('.animate-flipOutY').waypoint(function() {
		$('.animate-flipOutY').addClass('animated flipOutY');
	}, {
		offset: '75%'
	});
	
//lightSpeedIn
		
	$('.animate-lightSpeedIn').waypoint(function() {
		$('.animate-lightSpeedIn').addClass('animated lightSpeedIn');
	}, {
		offset: '75%'
	});
	
//lightSpeedOut
		
	$('.animate-lightSpeedOut').waypoint(function() {
		$('.animate-lightSpeedOut').addClass('animated lightSpeedOut');
	}, {
		offset: '75%'
	});
	
//rotateIn
		
	$('.animate-rotateIn').waypoint(function() {
		$('.animate-rotateIn').addClass('animated rotateIn');
	}, {
		offset: '75%'
	});
	
//rotateInDownLeft
		
	$('.animate-rotateInDownLeft').waypoint(function() {
		$('.animate-rotateInDownLeft').addClass('animated rotateInDownLeft');
	}, {
		offset: '75%'
	});
	
//rotateInDownRight
		
	$('.animate-rotateInDownRight').waypoint(function() {
		$('.animate-rotateInDownRight').addClass('animated rotateInDownRight');
	}, {
		offset: '75%'
	});
	
//rotateInUpLeft
		
	$('.animate-rotateInUpLeft').waypoint(function() {
		$('.animate-rotateInUpLeft').addClass('animated rotateInUpLeft');
	}, {
		offset: '75%'
	});
	
//rotateInUpRight
		
	$('.animate-rotateInUpRight').waypoint(function() {
		$('.animate-rotateInUpRight').addClass('animated rotateInUpRight');
	}, {
		offset: '75%'
	});
	
//rotateOut
		
	$('.animate-rotateOut').waypoint(function() {
		$('.animate-rotateOut').addClass('animated rotateOut');
	}, {
		offset: '75%'
	});
	
//rotateOutDownLeft
		
	$('.animate-rotateOutDownLeft').waypoint(function() {
		$('.animate-rotateOutDownLeft').addClass('animated rotateOutDownLeft');
	}, {
		offset: '75%'
	});
	
//rotateOutDownRight
		
	$('.animate-rotateOutDownRight').waypoint(function() {
		$('.animate-rotateOutDownRight').addClass('animated rotateOutDownRight');
	}, {
		offset: '75%'
	});
	
//rotateOutUpLeft
		
	$('.animate-rotateOutUpLeft').waypoint(function() {
		$('.animate-rotateOutUpLeft').addClass('animated rotateOutUpLeft');
	}, {
		offset: '75%'
	});
	
//rotateOutUpRight
		
	$('.animate-rotateOutUpRight').waypoint(function() {
		$('.animate-rotateOutUpRight').addClass('animated rotateOutUpRight');
	}, {
		offset: '75%'
	});
	
//hinge
		
	$('.animate-hinge').waypoint(function() {
		$('.animate-hinge').addClass('animated hinge');
	}, {
		offset: '75%'
	});
	
//rollIn
		
	$('.animate-rollIn').waypoint(function() {
		$('.animate-rollIn').addClass('animated rollIn');
	}, {
		offset: '75%'
	});
	
//rollOut
		
	$('.animate-rollOut').waypoint(function() {
		$('.animate-rollOut').addClass('animated rollOut');
	}, {
		offset: '75%'
	});
	
//zoomIn
		
	$('.animate-zoomIn').waypoint(function() {
		$('.animate-zoomIn').addClass('animated zoomIn');
	}, {
		offset: '75%'
	});
	
//zoomInDown
		
	$('.animate-zoomInDown').waypoint(function() {
		$('.animate-zoomInDown').addClass('animated zoomInDown');
	}, {
		offset: '75%'
	});
	
//zoomInLeft
		
	$('.animate-zoomInLeft').waypoint(function() {
		$('.animate-zoomInLeft').addClass('animated zoomInLeft');
	}, {
		offset: '75%'
	});
	
//zoomInRight
		
	$('.animate-zoomInRight').waypoint(function() {
		$('.animate-zoomInRight').addClass('animated zoomInRight');
	}, {
		offset: '75%'
	});
	
//zoomInUp
		
	$('.animate-zoomInUp').waypoint(function() {
		$('.animate-zoomInUp').addClass('animated zoomInUp');
	}, {
		offset: '75%'
	});
	
//zoomOut
		
	$('.animate-zoomOut').waypoint(function() {
		$('.animate-zoomOut').addClass('animated zoomOut');
	}, {
		offset: '75%'
	});
	
//zoomOutDown
		
	$('.animate-zoomOutDown').waypoint(function() {
		$('.animate-zoomOutDown').addClass('animated zoomOutDown');
	}, {
		offset: '75%'
	});
	
//zoomOutLeft
		
	$('.animate-zoomOutLeft').waypoint(function() {
		$('.animate-zoomOutLeft').addClass('animated zoomOutLeft');
	}, {
		offset: '75%'
	});
	
//zoomOutRight
		
	$('.animate-zoomOutRight').waypoint(function() {
		$('.animate-zoomOutRight').addClass('animated zoomOutRight');
	}, {
		offset: '75%'
	});
	
//zoomOutUp
		
	$('.animate-zoomOutUp').waypoint(function() {
		$('.animate-zoomOutUp').addClass('animated zoomOutUp');
	}, {
		offset: '75%'
	});
	
//slideInDown
		
	$('.animate-slideInDown').waypoint(function() {
		$('.animate-slideInDown').addClass('animated slideInDown');
	}, {
		offset: '75%'
	});
	
//slideInLeft
		
	$('.animate-slideInLeft').waypoint(function() {
		$('.animate-slideInLeft').addClass('animated slideInLeft');
	}, {
		offset: '75%'
	});
	
//slideInRight
		
	$('.animate-slideInRight').waypoint(function() {
		$('.animate-slideInRight').addClass('animated slideInRight');
	}, {
		offset: '75%'
	});
	
//slideInUp
		
	$('.animate-slideInUp').waypoint(function() {
		$('.animate-slideInUp').addClass('animated slideInUp');
	}, {
		offset: '75%'
	});
	
//slideOutDown
		
	$('.animate-slideOutDown').waypoint(function() {
		$('.animate-slideOutDown').addClass('animated slideOutDown');
	}, {
		offset: '75%'
	});
	
//slideOutLeft
		
	$('.animate-slideOutLeft').waypoint(function() {
		$('.animate-slideOutLeft').addClass('animated slideOutLeft');
	}, {
		offset: '75%'
	});
	

	
	
	


