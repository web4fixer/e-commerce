// $('.notify-bell').click(function() {
// 	$('.dropdown-notify-menu').toggle();
// })

// $('.notify-message').click(function() {
// 	$('.dropdown-message-menu').toggle();
// });

// $('.notify-cart').click(function() {
// 	$('.dropdown-cart-menu').toggle();
// });

// $('.account-user-block').click(function() {
// 	$('.dropdown-user-menu').toggle();
// });
// mix it up plugin
$("#container-mix").mixItUp({
		targetSelector: '.mix',
		activeClass:'on',
        filterSelector: '.filter',
        buttonEvent: 'click',
        effects: ['fade','rotateY'],
        listEffects: null,
        easing: 'smooth',
        layoutMode: 'grid',
        targetDisplayGrid: 'inline-block',
        targetDisplayList: 'block',
        gridClass: '',
        listClass: '',
        transitionSpeed: 600,
        showOnLoad: 'all',
        sortOnLoad: false,
        multiFilter: false,
        filterLogic: 'or',
        resizeContainer: true,
        minHeight: 0,
        failClass: 'fail',
        perspectiveDistance: '3000',
        perspectiveOrigin: '50% 50%',
        animateGridList: true,
    });	
// owl carousel slider
$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    slideSpeed : 1000,
    loop: true,
    nav: true,
    autoPlay: true,
    stopOnHover: true,
    animateOut:  'slideOutDown' ,
    animateIn:  'slideOutDown' ,
    smartSpeed: 450,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:3
      },
      1180:{
        items:4
      }
    }
  });
});
