
// HIDE AND SHOW NAVIGATION HAMBURGER
// Show
$(".js-icon-navicon").click(function() {
	$(".js-header-nav").toggle("slow");
	$(".js-icon-navicon").addClass("js-hide-hamburger");
	$(".js-icon-close").addClass("js-show-close");
	$(".js-icon-close").removeClass("js-hide-close");
});

// Hide
$(".js-icon-close").click(function() {
	$(".js-header-nav").toggle("slow");
	$(".js-icon-close").addClass("js-hide-close");
	$(".js-icon-navicon").addClass("js-show-hamburger");
	$(".js-icon-navicon").removeClass("js-hide-hamburger");
});



// LANGUAGE EVENT
$(".js-en").click(function() {
	$(".js-en").addClass("lang-active");
	$(".js-vi").removeClass("lang-active");
});

$(".js-vi").click(function() {
	$(".js-vi").addClass("lang-active");
	$(".js-en").removeClass("lang-active");
});


// SHOW AND HIDE VIDEO INTRO
var src = $(".video-container").children("iframe").attr("src");
// Show
$(".js-show-video").click(function() {
	$(".video-container").children("iframe").attr("src", src);
	$(".modal-content").addClass("fadeTopDown");
	$(".modal-content").removeClass("hide-video")
	$(".modal").addClass("modal-backdrop");
});


// Hide
$(".modal").click(function() {
	$(".video-container").children("iframe").attr("src", "");
	$(".modal-content").removeClass("fadeTopDown");
	$(".modal-content").addClass("hide-video");
	$(".modal").removeClass("modal-backdrop");
});


// ADD SWING ANIMATE TO CALL US TEXT
// $(window).scroll(function() {
// 	var hT = $(".js-call-us").offset().top;
// 	var hH = $(".js-call-us").outerHeight();
// 	var windowScrollTop = $(window).scrollTop() + 300;
// 	if ( (windowScrollTop > hT) && (windowScrollTop < (hT + hH + 200)) ) {
// 		$(".js-call-us").addClass("js-animate-call-us");
// 	} else {
// 		$(".js-call-us").removeClass("js-animate-call-us");
// 	}
// });

// ADD SCALE ANIMATE TO FIRST PARA OF SECTION INTRO
// $(window).scroll(function() {
// 	var hT = $(".js-scale-text").offset().top;
// 	var hH = $(".js-scale-text").outerHeight();
// 	var windowScrollTop = $(window).scrollTop() + 300;
// 	if ( (windowScrollTop > hT) && (windowScrollTop < (hT + hH + 100)) ) {
// 		$(".js-scale-text").addClass("js-animate-section-intro");
// 	} else {
// 		$(".js-scale-text").removeClass("js-animate-section-intro");
// 	}
// });

// ADD SLIDEIN ANIMATE TO H3 OF SECTION INTRO
// $(window).scroll(function() {
// 	var hT = $(".js-h3-section-intro").offset().top;
// 	var hH = $(".js-h3-section-intro").outerHeight();
// 	var windowScrollTop = $(window).scrollTop() + 500;
// 	if ( (windowScrollTop > hT) && (windowScrollTop < (hT + hH + 500)) ) {
// 		$(".js-h3-section-intro").addClass("js-animate-h3-section-intro");
// 	} else {
// 		$(".js-h3-section-intro").removeClass("js-animate-h3-section-intro");
// 	}
// });

// ADD ZOOMIN ANIMATE TO IMAGES IN SECTION PRODUCTS
$(".js-img-section-products").hover(
	function() {
		$(this).addClass("js-animate-img-section-products");
	},
	function() {
		$(this).removeClass("js-animate-img-section-products");
	}
);

// ADD ANIMATION TO THE IMAGE IN GALLERY
$(window).scroll(function() {
	var imageArrayGallery = $(".js-img-gallery");
	imageArrayGallery.each(function() {
		var hT = $(this).offset().top;
		var hH = $(this).outerHeight();
		var windowScrollTop = $(window).scrollTop() + 450;
		if ( (windowScrollTop > hT) && (windowScrollTop < (hT + hH + 1000)) ) {
			$(this).addClass("js-animate-img-gallery");
		}
	});
});


// ADD GOOGLE MAP TO WEBSITE
function initMap() {
  var PhuHungLocation = {lat: 10.231103, lng: 106.410177};
  var map = new google.maps.Map(document.getElementById('phuhung-map'), {
    zoom: 13,
    center: PhuHungLocation
  });
  var marker = new google.maps.Marker({
    position: PhuHungLocation,
    map: map
  });

  var infowindow = new google.maps.InfoWindow;
  infowindow.setContent('<b>phân dơi Hữu Lũng</b>');

  var marker = new google.maps.Marker({
    map: map, 
    position: PhuHungLocation
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}


// HIDE & SHOW NAVIGATION ON SCROLLING
$(window).scroll(function() {
	var body = document.body;
    var html = document.documentElement;
	var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
	var hT = $(".navigation").offset().top;
	var hH = $(".navigation").outerHeight();
	var windowScrollTop = $(window).scrollTop();
	var windowWidth = $(window).width();
	if ((windowScrollTop > 100) && (windowScrollTop < height) && (windowWidth > 750)) {
		$(".navigation").removeClass("js-navigation");
		$(".navigation").addClass("js-navi-scroll");
	} else {
		$(".navigation").removeClass("js-navi-scroll");
		$(".navigation").addClass("js-navigation");
	}
});


// ACTIVE THE NAVIGATION WHILE SCROLLING UP & DOWN
// For Section Intro
$(window).scroll(function() {
	var hT = $("#section-intro").offset().top;
	var hH = $("#section-intro").outerHeight();
	var windowScrollTop = $(window).scrollTop() + 90;
	var windowWidth = $(window).width();
	if ((windowScrollTop > hT) && (windowScrollTop < (hT + hH)) && (windowWidth > 750)) {
		$(".js-intro-scroll").addClass("js-border-bottom-show");
	} else {
		$(".js-intro-scroll").removeClass("js-border-bottom-show");
	}
});


// For Section Products
$(window).scroll(function() {
	var hT = $("#section-products").offset().top;
	var hH = $("#section-products").outerHeight();
	var windowScrollTop = $(window).scrollTop() + 90;
	var windowWidth = $(window).width();
	if ((windowScrollTop > hT) && (windowScrollTop < (hT + hH)) && (windowWidth > 750)) {
		$(".js-products-scroll").addClass("js-border-bottom-show");
	} else {
		$(".js-products-scroll").removeClass("js-border-bottom-show");
	}
});


// For Section Gallery
$(window).scroll(function() {
	var hT = $("#section-gallery").offset().top;
	var hH = $("#section-gallery").outerHeight();
	var windowScrollTop = $(window).scrollTop() + 90;
	var windowWidth = $(window).width();
	if ((windowScrollTop > hT) && (windowScrollTop < (hT + hH)) && (windowWidth > 750)) {
		$(".js-gallery-scroll").addClass("js-border-bottom-show");
	} else {
		$(".js-gallery-scroll").removeClass("js-border-bottom-show");
	}
});


// For Section Form
$(window).scroll(function() {
	var hT = $("#section-form").offset().top;
	var hH = $("#section-form").outerHeight();
	var windowScrollTop = $(window).scrollTop() + 90;
	var windowWidth = $(window).width();
	if ((windowScrollTop > hT) && (windowScrollTop < (hT + hH)) && (windowWidth > 750)) {
		$(".js-form-scroll").addClass("js-border-bottom-show");
	} else {
		$(".js-form-scroll").removeClass("js-border-bottom-show");
	}
});



// Smooth scroll to div id jQuery
$(".js-intro-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-intro").offset().top - 70
    }, 2000);
});

$(".js-gallery-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-gallery").offset().top - 70
    }, 2000);
});

$(".js-products-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-products").offset().top - 70
    }, 2000);
});

$(".js-button-detail").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-products").offset().top - 70
    }, 2000);
});


$(".js-form-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-form").offset().top - 70
    }, 2000);
});

$(".js-logo-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#to-top-page").offset().top - 70
    }, 2000);
});






