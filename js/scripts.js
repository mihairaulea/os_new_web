(function($) {
    $(document).ready(function() {

        // Scroll to Top
        jQuery('.scrolltotop').click(function() {
            jQuery('html').animate({
                'scrollTop': '0px'
            }, 400);
            return false;
        });

        jQuery(window).scroll(function() {
            var upto = jQuery(window).scrollTop();
            if (upto > 500) {
                jQuery('.scrolltotop').fadeIn();
            } else {
                jQuery('.scrolltotop').fadeOut();
            }
        });

        // sticky header
        jQuery(window).scroll(function() {
            var upto = jQuery(window).scrollTop();
            if (upto > 500) {
                jQuery('.header-area').addClass('nav-stciky').removeClass('.header-area');

            } else {
                jQuery('.header-area').removeClass('nav-stciky').addClass('.header-area');
            }
        });


        // hamburger script
        $('#nav-icon3').click(function() {
            $('#nav-icon3').toggleClass('open');
        });

        // side nav 
        $('.hamburger').click(function() {
            $('.sidebar-menu').toggleClass('active');
            $('.header-area').toggleClass('bgblack');
            $('#overlay').toggleClass('overlay');
        });



        // owl carousel
        $('.hero_carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            center: true,
            autoplaySpeed: 1000,
            autoplayHoverPause: false,
            nav: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        })

        // $('.business_carousel').owlCarousel({
        //     autoplay: false,
        //     center: true,
        //     items: 4,
        //     loop: true,
        //     margin: 10,
        //     nav: false,
        //     autoplayTimeout: 7000,
        //     autoplaySpeed: 1000,
        //     responsive: {
        //         0: {
        //             items: 2,
        //             center: false,
        //             margin: 0,
        //         },
        //         576: {
        //             items: 3
        //         },
        //         1000: {
        //             items: 4
        //         }
        //     }
        // })

        var $owl = $('.business_carousel');

        $owl.children().each( function( index ) {
        $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
        });

        $owl.owlCarousel({
            autoplay: false,
            center: true,
            items: 4,
            loop: true,
            margin: 10,
            nav: false,
            autoplayTimeout: 7000,
            autoplaySpeed: 1000,
            responsive: {
                0: {
                    items: 2,
                    center: false,
                    margin: 0,
                },
                576: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });

        $(document).on('click', '.owl-item>div', function() {
        var $speed = 300;  // in ms
        $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
        });


        var $owl = $('.owl-carousel');

        $owl.children().each( function( index ) {
        $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
        });

        $owl.owlCarousel({
            loop: true,
            margin: 2,
            nav: true,
            autoplay: false,
            center: true,
            autoplaySpeed: 1000,
            autoplayHoverPause: false,
            nav: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 2,
                    center: false,
                },
                576: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });

        $(document).on('click', '.owl-item>div', function() {
        var $speed = 300;  // in ms
        $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
        });

        

        // tabs here
        $('#myTab').jqTabs({
			direction: 'horizontal',
			mainWrapperClass: 'jq-tab-wrapper',
			tabClass: 'jq-tab-title',
			tabContentClass: 'jq-tab-content',
			duration: 400,
});

    });
})(jQuery);