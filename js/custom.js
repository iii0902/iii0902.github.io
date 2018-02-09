$(document).ready(function() {

    var l =  window.airportsList.length;
    var data = [];
    for(var i=0;i<l;i++){
        var item = airportsList[i];
        data.push({
            'id' : item[0],
            'text' : item[1]
        })
    }

    $(".js-example-basic-single").select2({
        data: data
    });


$("#search").click(function(){
   var from = $("#fromAir").val();
   var to = $("#toAir").val();
   var myDate = $("#datepicker").datepicker( "getDate" );
   console.info(from, to, myDate);

    var m =(myDate.getMonth() + 1);
    var d = myDate.getDate();
    if(m<10)m="0"+m;
    if(d<10)d="0"+d;

    if (device.default.mobile()) {
        window.location.href ="https://m.aviasales.ru/"+from+d+m+to+"1"
    } else {
        window.location.href ="https://www.aviasales.ru/search/"+from+d+m+to+"1"
    }

});



    $('.arrow-down').on('click', function() {
        $('body,html').animate({
            scrollTop: $('#features').offset().top - 60
        }, 800);
        return false;
    });


    $('.to-the-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    $('.header-logo').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });




    $('.department-slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });


});

(function(jQuery) {


    function fadeIntro(scrollTopp) {
        var homeSection = $("#header");
        var overlay = $("#header .color-overlay");

        if (homeSection.length > 0) {
            var homeSHeight = homeSection.height();
            var topScroll = $(document).scrollTop();

            if ((homeSection.hasClass('home-parallax')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                homeSection.css('top', (topScroll * 0.55));

            }
            if (homeSection.hasClass('home-fade') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                var caption = $('.header-text');
                var video = $('.header-video-container');
                //if (device.mobile()){
                //	overlay.css('opacity', (0.3+topScroll/homeSection.height() * 1));
                //}
                caption.css('opacity', (1 - topScroll / homeSection.height() * 1));
                video.css('opacity', (0.6 - topScroll / homeSection.height() * 1));
            }
        }
    }

    $(window).scroll(function(e) {
        e.preventDefault();
        fadeIntro(this);

        if ($(this).scrollTop() != 0) {
            $('.to-the-top').fadeIn();
            $('.main-navigation').addClass('white');
        } else {
            $('.to-the-top').fadeOut();
            $('.main-navigation').removeClass('white');
        }
    });

    $( "#datepicker" ).datepicker({
        dateFormat: "mm-dd",
        defaultDate: new Date(),
        minDate: new Date()
    });

})(jQuery);