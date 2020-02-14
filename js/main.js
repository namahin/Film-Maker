// owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoWidth: true,
    margin: 30,
    nav: false,
    autoPlay: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})