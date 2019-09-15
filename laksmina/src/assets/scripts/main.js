jQuery(document).ready(function($) {
    'use-strict';

    function ROsmoothScroll() {
        if (navigator.appVersion.indexOf("Mac") == -1) {
            $('body').append("<script src='vendors/smooth-scroll/SmoothScroll.js'></script>");
        }
    }
    ROsmoothScroll();

    function ROtouchNav() {
        if ($('html').hasClass('touch')) {
            $('#main-nav .sub-nav').siblings('a').on('click', function() {
                return false;
            });
        }
    }
    ROtouchNav();
    function ROEasingMoving() {
        var $root = $('html, body');
        $('.easing-link-group a , .easing-link,#follow-button').on('click', function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: ($(href).offset().top)
            }, 500, function() {
                window.location.hash = href;
            });
            return false;
        });
    }
    ROEasingMoving();

    function RObackTop() {
        $('#backtop , a[href="#home"]').on('click', function() {
            $('html,body').animate({
                scrollTop: 0
            }, 400);
            return false;
        });

        if ($(window).scrollTop() > 300) {
            $('#backtop').addClass('show');
        } else {
            $('#backtop').removeClass('show');
        }

        $(window).on('scroll', function() {

            if ($(window).scrollTop() > 300) {
                $('#backtop').addClass('show');
            } else {
                $('#backtop').removeClass('show');
            }
        });
    }
    RObackTop();

    function ROHomeSlider() {
        $('#header-background-slider').flexslider({
            animationSpeed: 700,
            directionNav: false,
            controlNav: false
        });
    }
    ROHomeSlider();

    function ROtesttimonialSlider($elem) {
        if ($elem.length) {
            $elem.flexslider({
                controlNav: false,
                directionNav: true
            });
        }
    }
    ROtesttimonialSlider($('#testimonial-slider'));

    function ROtesttimonialSlider2() {
        $('#testimonial-1').flexslider({
            animation: "slide",
            animationLoop: true,
            controlNav: true,
            slideshow: true,
            directionNav: false
        });
    }
    ROtesttimonialSlider2();

    function ROtesttimonialSlider3() {
        $('#testimonial-2').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: true
        });
    }
    ROtesttimonialSlider3();

    function ROimgSlider() {
        $('#images-slider').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 200,
            controlNav: false,
            directionNav: true,
            minItems: 2,
            move: 1,
            maxItems: 8
        });
    }
    ROimgSlider();

    function ROzoomImage() {
        var $window = $(window);
        $("#Ro_zoom_image > img").elevateZoom({
            zoomType: "lens",
            responsive: true,
            containLensZoom: true,
            cursor: 'pointer',
            gallery:'Ro_gallery_0', 
            cursor: 'pointer', 
            borderSize: 3,
            borderColour: "#84C340",
            galleryActiveClass: "active",
            loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
        });

        $("#Ro_zoom_image > img").on("click", function(e) {
            var ez =   $('#Ro_zoom_image > img').data('elevateZoom');
                $.fancybox(ez.getGalleryList());
            return false;
        });
    }
    ROzoomImage();

    function ROheadervideo() {
        $("#play-button").on("click", function(e){
            e.preventDefault();
                $.fancybox({
                'padding' : 0,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'title': this.title,
                'width': 720,
                'height': 405,
                'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type': 'swf',
                'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
                }
            });
        });
    }
    ROheadervideo();

    function ROtextEllipsis() {
        $(".ellipsis").each(function() {
            $(this).dotdotdot();
        });
        $(window).on('resize', function() {
            $(".ellipsis").each(function() {
                $(this).dotdotdot();
            });
        });
    }
    ROtextEllipsis();

    function RODismissBlogNote(){
        $('.dismiss-thisnote').on('click', function() {
            $(this).parent('.note').hide();
            return false;
            /* Act on the event */
        });
    }
    RODismissBlogNote();

    function ROratingStar() {
        $('.rating').each(function() {
            var point = $(this).attr('data-rating');
            if (point == 5) {
                $(this).children().addClass('rated');
            } else {
                $(this).children().eq(point).prevAll().addClass('rated');
            }
        });
    }
    ROratingStar();

    function ROhomeSlider1() {
        var _SlideshowTransitions = [
            //Fade
            {
                $Duration: 1200,
                $Opacity: 2
            }
        ];

        var _CaptionTransitions = [];
        _CaptionTransitions.L = {
            $Duration: 800,
            x: 0.6,
            $Easing: {
                $Left: $JssorEasing$.$EaseInOutSine
            },
            $Opacity: 2
        };
        _CaptionTransitions.FADE = {
            $Duration: 900,
            $Opacity: 2
        };
        _CaptionTransitions.R = {
            $Duration: 800,
            x: -0.6,
            $Easing: {
                $Left: $JssorEasing$.$EaseInOutSine
            },
            $Opacity: 2
        };
        _CaptionTransitions.T = {
            $Duration: 800,
            y: 0.6,
            $Easing: {
                $Top: $JssorEasing$.$EaseInOutSine
            },
            $Opacity: 2
        };
        _CaptionTransitions.B = {
            $Duration: 800,
            y: -0.6,
            $Easing: {
                $Top: $JssorEasing$.$EaseInOutSine
            },
            $Opacity: 2
        };

        var options = {
            $AutoPlay: true, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $DragOrientation: 3, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
            $CaptionSliderOptions: { //[Optional] Options which specifies how to animate caption
                $Class: $JssorCaptionSlider$, //[Required] Class to create instance to animate caption
                $CaptionTransitions: _CaptionTransitions, //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                $PlayInMode: 1, //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                $PlayOutMode: 3 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
            },
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$, //[Required] Class to create instance of slideshow
                $Transitions: _SlideshowTransitions, //[Required] An array of slideshow transitions to play slideshow
                $TransitionsOrder: 1, //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                $ShowLink: true //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
            },
        };

        var jssor_slider1 = new $JssorSlider$("slider-style-1", options);

        function ROresponsiveHomeSlider() {
            var parentWidth = $('#slider-style-1').parent().width();
            if (parentWidth) {
                jssor_slider1.$ScaleWidth(parentWidth);
            } else
                window.setTimeout(ROresponsiveHomeSlider, 30);
        }

        ROresponsiveHomeSlider();
        $(window).on('resize', function() {
            ROresponsiveHomeSlider();
        });
    }

    if ($('#slider-style-1').length) {
        ROhomeSlider1();
    }

    function ROhomeSlider2() {
        var _SlideshowTransitions = [
            //Fade
            {
                $Duration: 1200,
                $Opacity: 2
            }
        ];

        var _CaptionTransitions = [];
        _CaptionTransitions.L = {
            $Duration: 800,
            x: 0.6,
            $Easing: {
                $Left: $JssorEasing$.$EaseInOutSine
            },
            $Opacity: 2
        };
        _CaptionTransitions.R = {
            $Duration: 800,
            x: -0.6,
            $Easing: {
                $Left: $JssorEasing$.$EaseInOutSine
            },
            $Opacity: 2
        };
        _CaptionTransitions.T = {
            $Duration: 800,
            y: 0.6,
            $Easing: {
                $Top: $JssorEasing$.$EaseInOutSine
            },
            $Opacity: 2
        };
        _CaptionTransitions.B = {
            $Duration: 800,
            y: -0.6,
            $Easing: {
                $Top: $JssorEasing$.$EaseInOutSine
            },
            $Opacity: 2
        };

        var options = {
            $AutoPlay: true, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $DragOrientation: 3, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
            $CaptionSliderOptions: { //[Optional] Options which specifies how to animate caption
                $Class: $JssorCaptionSlider$, //[Required] Class to create instance to animate caption
                $CaptionTransitions: _CaptionTransitions, //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                $PlayInMode: 1, //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                $PlayOutMode: 3 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
            },
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$, //[Required] Class to create instance of slideshow
                $Transitions: _SlideshowTransitions, //[Required] An array of slideshow transitions to play slideshow
                $TransitionsOrder: 1, //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                $ShowLink: true //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
            }
        };

        var jssor_slider2 = new $JssorSlider$("slider-style-2", options);

        function ROresponsiveHomeSlider() {
            var parentWidth = $('#slider-style-2').parent().width();
            if (parentWidth) {
                jssor_slider2.$ScaleWidth(parentWidth);
            } else
                window.setTimeout(ROresponsiveHomeSlider, 30);
        }

        ROresponsiveHomeSlider();
        $(window).on('resize', function() {
            ROresponsiveHomeSlider();
        });


        var listBG = ['#ABDCE1', '#DEB6B6'];
        var currentBackgroud;
        jssor_slider2.$On($JssorSlider$.$EVT_SWIPE_END, function(slideIndex) {
            currentBackgroud = listBG[Math.abs(jssor_slider2.$CurrentIndex())];
            $('#slider-style2-background').css('background-color', currentBackgroud);
        });
    }
    if ($('#slider-style-2').length) {
        ROhomeSlider2();
    }

    function RODatePicker() {
        if ($('.date-picker').length) {
            $('.date-picker').datepicker();
        }
    }
    RODatePicker();

    function ROcountdownClock() {
        $('.countdown-clock').each(function() {
            var countdownTime = $(this).attr('data-countdown');
            $(this).countdown({
                until: countdownTime,
                format: 'ODHMS',
                padZeroes: true
            });
        });
    }
    ROcountdownClock();

    function ROmainNav() {
        $('#hamburger').on('click', function() {
            $('body').toggleClass('main-nav-opened');
        });
    }
    ROmainNav();

    function ROscroller() {
    }
    ROscroller();

});