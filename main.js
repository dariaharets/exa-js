// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  document.addEventListener('DOMContentLoaded', function(){
	
    $('.autoplay').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.banner-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).on('scroll', function() {
    const scrollTop = $(document).scrollTop();
    // const firstSectionHeight = $('.container-1').height();
    const cont2Top = $('.container-2').offset().top;
    const cont4Top = $('.container-4').offset().top;
    const cont5Top = $('.container-5').offset().top;
    if (scrollTop >= cont2Top - 120) {
        $('.header').addClass('scrolled')
    } else {
        $('.header').removeClass('scrolled')
    }
    if (scrollTop <= cont2Top) {
        $('.nav-about').addClass('scrolled')
        $('.nav-projects').removeClass('scrolled')
    } else if (scrollTop <= cont4Top) {
        $('.nav-projects').addClass('scrolled')
        $('.nav-about').removeClass('scrolled')
        $('.nav-news').removeClass('scrolled')
    } else if (scrollTop <= cont5Top) {
        $('.nav-news').addClass('scrolled')
        $('.nav-projects').removeClass('scrolled')
        $('.nav-contacts').removeClass('scrolled')
    } else {
        $('.nav-contacts').addClass('scrolled')
        $('.nav-news').removeClass('scrolled')
    }

});
