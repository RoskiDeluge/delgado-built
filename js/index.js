$('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 0) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll + 130) {
                $('.navbar-nav li').removeClass('active');
                $('.navbar-nav li').eq(i).addClass('active');
            }
        });

    } else {

       
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li').addClass('active');
    }

}).scroll();


var userFeed = new Instafeed({
        get: 'user',
        userId: '19370470',
        filter: function(image) {
            return image.tags.indexOf('warehouse') >= 0;
        }
    });
    userFeed.run();

