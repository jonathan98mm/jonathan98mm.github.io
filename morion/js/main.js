(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
		$('.carousel-properties').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
                    document.getElementById("header-img").src = "./images/LOGO_COLOR.png";
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
                    document.getElementById("header-img").src = "./images/LOGO MORION.png";
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();


	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

    const scrollElements = document.querySelectorAll(".js-scroll");

    scrollElements.forEach((el) => {
        el.style.opacity = 0
    });

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        })
    };

    window.addEventListener('scroll', () => {
        throttle(handleScrollAnimation, 250);
    });

    //initialize throttleTimer as false
    let throttleTimer = false;

    const throttle = (callback, time) => {
        //don't run the function while throttle timer is true
        if (throttleTimer) return;

        //first set throttle timer to true so the function doesn't run
        throttleTimer = true;

        setTimeout(() => {
            //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
            callback();
            throttleTimer = false;
        }, time);
    };

    window.addEventListener("scroll", (event) => {
        let scroll = window.scrollY;
        console.log(scroll);
        var background = document.getElementById("Back");
        var text = document.getElementById("Text");
        var elem = document.querySelector(".zoom-image-head-body");

        if (scroll < 100) {
            background.style.opacity = 1;
            text.style.opacity = 1;
        } else {
            background.style.opacity = (1 - (scroll - 100) / 500);
            text.style.opacity = (1 - (scroll - 100) / 500);
        }

        if (background.style.opacity < 0) {
            elem.style.display = "none";
        } else {
            elem.style.display = "block";
        }

        if (scroll > 0) {
            background.style.transform = "translate(" + ((scroll / 250) * (-1)) + "%," + ((scroll / 62.5) * (-1)) + "%) matrix(" + (1 + (scroll / 3000)) + ",0,0," + (1 + (scroll / 3000)) + ",0,0)";
            text.style.transform = "translate(" + ((scroll / 50)) + "%," + ((scroll / 12)) + "%) matrix(" + (1 + (scroll / 3000)) + ",0,0," + (1 + (scroll / 3000)) + ",0,0)";
        } else {
            background.style.transform = "matrix(1,0,0,1,0,0)";
            text.style.transform = "matrix(1,0,0,1,0,0)";
        }
    });

    window.addEventListener("resize", function (){
        var widthView = window.innerWidth;

        console.log("Ancho: " + widthView);

        if (widthView <= 425) {
            var nosotros = document.getElementById("us-container");
            var rectangle = document.getElementsByClassName("rectangle")[0];
            var filosofia = document.getElementById("filosofy-container");

            nosotros.classList.replace("slide-right-1s", "slide-right");
            rectangle.style.display = "none";
        }

        if(widthView > 425 && widthView <= 768){
            var nosotros = document.getElementById("us-container");
            var rectangle = document.getElementsByClassName("rectangle")[0];
            var filosofia = document.getElementById("filosofy-container");

            nosotros.classList.replace("slide-right-1s", "slide-right");
            filosofia.classList.replace("offset-md-4", "offset-md-3");
            filosofia.classList.replace("col-md-4", "col-md-6")
            rectangle.style.display = "none";
        }

        if(widthView > 768){
            var nosotros = document.getElementById("us-container");
            var rectangle = document.getElementsByClassName("rectangle")[0];
            var filosofia = document.getElementById("filosofy-container");

            nosotros.classList.replace("slide-right", "slide-right-1s");
            filosofia.classList.replace("offset-md-3", "offset-md-4");
            filosofia.classList.replace("col-md-6", "col-md-4")
            rectangle.style.display = "block";
        }
    })

})(jQuery);

