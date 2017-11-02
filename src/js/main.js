$('.navbar-toggle').click(function(e) {
  e.preventDefault()
  var menu = $('#nav')
  if(menu.is(":hidden")){
    menu.slideDown(250)
  }
  else{
    menu.slideUp(250)
  }
});

$('.main-slider').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  dots: false,
  responsive:{
    0:{
        items:1
    }
  }
})

$('.portfolio-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  dots: false,
  responsive:{
    0:{
        items:1
    }
  }
})
$('.mobile-portfolio-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav: true,
  dots: false,
  responsive:{
    0:{
        items:1
    },
    450:{
        items:2
    },
    550:{
      items:3
    }
  }
})


$('.photo-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  autoplay: true,
  autoplayTimeout: 1500,
  dots: false,
  responsive:{
    0:{
        items:1
    },
    450:{
        items:2
    },
    768:{
        items:3
    },
    992:{
        items:4
    },
    1200:{
        items:5
    }
  }
})

$(document).ready(function() {
  $('.parallax').each(function() {
    var parallaxPos, winPosMain, parallaxItem;
    var itemHeight = $(this).find('.parallax-wrapp').height();
    $(this).css('height', itemHeight + 'px');

    parallaxPos = $(this).find('.parallax-wrapp').offset().top;
    parallaxItem = $(this).find('.parallax-wrapp')

    if(window.matchMedia('(min-width: 992px)').matches){
      $(window).scroll(function() {
        winPosMain = $(window).scrollTop();
        
        if (winPosMain >= parallaxPos) {
          parallaxItem.addClass('fixed')
        } 
        else {
          parallaxItem.removeClass('fixed')
        }
      });
    }
  });
  $(".fancybox").fancybox({
    padding : 0,
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    helpers: {
      overlay: {
        locked: false
      }
    }
  });
  
  $('.form-control_tel').inputmask("+38 (999) 999 99 99");

  $(".scroll-link").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top -132;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});
