$( document ).on('turbolinks:load',function() {




    //Activate Select2  Js
    $("#search_select").select2({
        placeholder: "Search by Category"

    });

    //resizing add class for menu
    $(window).resize(function(){
            var width = $(window).width();
            if( width <= 768){
                // Adding collapse to first level menu in mobile
                $('.menu-container').addClass( 'mobile' );
                $('.menu-container').removeClass( 'desktop' );
                $('.menu-container .menu-tab').removeClass( 'active' );
                $(".menu-tab .food_and_drink_anchor").attr( "data-toggle", "collapse").attr( "data-target","#food-and-drink" );
                $(".menu-tab .services_anchor").attr( "data-toggle", "collapse").attr( "data-target","#services" );
                $(".menu-tab .events_anchor").attr( "data-toggle", "collapse").attr( "data-target","#events" );
                $(".menu-tab .places_anchor").attr( "data-toggle", "collapse").attr( "data-target","#places" );
                $(".menu-tab .local_brands_anchor").attr( "data-toggle", "collapse").attr( "data-target","#local_brands" );
                $(".menu-tab .container-fluid").addClass("collapse");

                //Adding collapse for second level

                $(".menu-tab .list").addClass("collapse");
                $(".menu-tab .restaraunts-anchor").attr( "data-target",".restaraunts-list").attr( "data-toggle", "collapse");
                $(".menu-tab .bars-anchor").attr( "data-target",".bars-list").attr( "data-toggle", "collapse");
                $(".menu-tab .night-clubs-anchor").attr( "data-target",".night-clubs-list").attr( "data-toggle", "collapse");
                $(".menu-tab .best-cafes-anchor").attr( "data-target",".best-cafes-list").attr( "data-toggle", "collapse");
                $(".menu-tab .markets-anchor").attr( "data-target",".markets-list").attr( "data-toggle", "collapse");

                $(".menu-tab a").removeAttr();
            }
            else{
                $('.menu-container').removeClass('mobile');
                $('.menu-container').addClass('desktop');
                $('.menu-tabs-section .menu-tab').first().addClass('active');
                $(".menu-tab .container-fluid").removeClass("collapse");
                $(".menu-tab .list").removeClass("collapse");

            }
        })
        .resize();

    //Clicking for menu
    $(".navbar .menu-button .menu-link").on('click', function() {
        if ( $(this).hasClass('pressed') ){
            $(this).removeClass('pressed');
            $(".menu-button").removeClass('pressed');

            $(".navbar .menu-button .menu-button-text").removeClass('hidden');
            $(".navbar .pages-section .pages-list").removeClass('hidden');
            $(".navbar .search-field-wrapper").addClass("hidden");
            $(".menu-container").addClass("visible animated").slideUp('500');
        }
        else {
            $(this).addClass('pressed animated fadeIn"');
            $(".menu-button").addClass("pressed");
            $(".menu-list-wrapper").addClass("active");
            $(".navbar .menu-button .menu-button-text").addClass('hidden');
            $(".navbar .pages-section .pages-list").addClass('hidden');
            $(".navbar .search-field-wrapper").removeClass("hidden");

            $(".navbar .search-field-wrapper").addClass("animated");

            //Menu
            $(".menu-container").addClass("visible animated").slideDown('500');
        }
    });

    $(".menu-container").removeClass('hidden').slideUp('10').addClass("visible");


    //Clicking for tabs in menu
    $(".navbar .menu-list-wrapper .menu-header .menu-tabs-section .menu-tab").on( 'click', function () {
        if ( $( '.menu-container').hasClass('desktop') ){
            $(".navbar .desktop .menu-list-wrapper .menu-header .menu-tabs-section .menu-tab").removeClass('active');
            $(this).addClass('active');
            return false;
        }

    });

    $('.search_field_input').blur(function() {
            $('.search-wrapper').removeClass("focus");
        })
        .focus(function() {
            $('.search-wrapper').addClass("focus")
        });

    //Smooth scroll
    $('.about-us-page .next-button').click(function() {
       var target = $(this);
       $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
    });

    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(37.5556023, -77.4627319),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var icon = '<%= asset_path("icon-google-map.png") %>';
        var pointMarker = new google.maps.Marker({
            position: new google.maps.LatLng(37.5556023, -77.4627319),
            map: map,
            icon: icon,
            title: "places"
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);


    //init slider slick on place
    $('.b_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

      
});