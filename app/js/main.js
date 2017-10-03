$('.dropdown-btn').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(":hidden")){
    $(this).addClass('active')
    menu.slideDown(250)
  }
  else{
    $(this).removeClass('active')
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
  margin:0,
  nav:false,
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

$('.parallax').each(function() {
  var parallaxPos, winPosMain, parallaxItem;
  var itemHeight = $(this).find('.parallax-wrapp').height();
  $(this).css('height', itemHeight + 'px');

  parallaxPos = $(this).find('.parallax-wrapp').offset().top;
  parallaxItem = $(this).find('.parallax-wrapp')
  
  $(window).scroll(function() {
    winPosMain = $(window).scrollTop();
    
    if (winPosMain >= parallaxPos) {
      parallaxItem.addClass('fixed')
    } 
    else {
      parallaxItem.removeClass('fixed')
    }
  });
});




