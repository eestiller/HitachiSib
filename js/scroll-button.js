    $(window).on("resize", function (e) {
        checkScreenSize();
    });
      checkScreenSize();
      function checkScreenSize(){
          var newWindowWidth = $(window).width();
          if (newWindowWidth <= 1920 && newWindowWidth >= 1601) {
            var $toggle = 0;
            var $toggle2 = 0;
          $('.right-btn').click(function(){
            
              if($toggle == 0){
                $('.swiper-wrapper').css({'transform' : 'translate3d(-1280.667px, 0px, 0px)', 'transition-duration' : '700ms'});
                $('.left-btn').show();
                  $toggle = 1;
                  $toggle2 = 1;
              }else if($toggle == 1){
                $('.swiper-wrapper').css({'transform' : 'translate3d(-2560.667px, 0px, 0px)', 'transition-duration' : '700ms'});
                $('.left-btn').show();
                $('.right-btn').hide();
                $toggle = 0;
                $toggle2 = 0;
              };
          });
          $('.left-btn').click(function(){
              if($toggle2 == 0){
                $('.swiper-wrapper').css({'transform' : 'translate3d(-1280.667px, 0px, 0px)', 'transition-duration' : '700ms'});
                $('.right-btn').show();
                  $toggle2 = 1;
                  $toggle = 1;
              }else if($toggle2 == 1){
                $('.swiper-wrapper').css({'transform' : 'translate3d(0px, 0px, 0px)', 'transition-duration' : '700ms'});
                $('.left-btn').hide();
                $('.right-btn').show();
               $('.site-intro p').css({'transform':'translateY(0)', 'opacity' : '1', 'transition':'transform 0.3s cubic-bezier(0, 0.36, 0.32, 1), opacity 0.2s ease-in;'});
                $toggle2 = 0;
                $toggle = 0;
              };
            });
              }





              if (newWindowWidth <= 1600 && newWindowWidth >= 1367) {
                var $toggle = 0;
                var $toggle2 = 0;
              $('.right-btn').click(function(){
                
                  if($toggle == 0){
                    $('.swiper-wrapper').css({'transform' : 'translate3d(-1060.667px, 0px, 0px)', 'transition-duration' : '700ms'});
                    $('.left-btn').show();
                      $toggle = 1;
                      $toggle2 = 1;
                  }else{
                    $('.swiper-wrapper').css({'transform' : 'translate3d(-2120.667px, 0px, 0px)', 'transition-duration' : '700ms'});
                    $('.left-btn').show();
                    $('.right-btn').hide();
                    $toggle = 0;
                    $toggle2 = 0;
                  };
              });
              $('.left-btn').click(function(){
                  if($toggle2 == 0){
                    $('.swiper-wrapper').css({'transform' : 'translate3d(-1060.667px, 0px, 0px)', 'transition-duration' : '700ms'});
                    $('.right-btn').show();
                      $toggle2 = 1;
                      $toggle = 1;
                  }else{
                    $('.swiper-wrapper').css({'transform' : 'translate3d(0px, 0px, 0px)', 'transition-duration' : '700ms'});
                    $('.left-btn').hide();
                    $('.right-btn').show();
                    $('.site-intro p').css({'transform':'translateY(0)', 'opacity' : '1', 'transition':'transform 0.3s cubic-bezier(0, 0.36, 0.32, 1), opacity 0.2s ease-in;'});
                    $toggle2 = 0;
                    $toggle = 0;
                  };
                });
                  }

    if (newWindowWidth <= 1366 && newWindowWidth >= 1281) {
        var $toggle = 0;
        var $toggle2 = 0;
      $('.right-btn').click(function(){
        
          if($toggle == 0){
            $('.swiper-wrapper').css({'transform' : 'translate3d(-910.667px, 0px, 0px)', 'transition-duration' : '700ms'});
            $('.left-btn').show();
              $toggle = 1;
              $toggle2 = 1;
          }else{
            $('.swiper-wrapper').css({'transform' : 'translate3d(-1910.667px, 0px, 0px)', 'transition-duration' : '700ms'});
            $('.left-btn').show();
            $('.right-btn').hide();
            $toggle = 0;
            $toggle2 = 0;
          };
      });
      $('.left-btn').click(function(){
          if($toggle2 == 0){
            $('.swiper-wrapper').css({'transform' : 'translate3d(-910.667px, 0px, 0px)', 'transition-duration' : '700ms'});
            $('.right-btn').show();
              $toggle2 = 1;
              $toggle = 1;
          }else{
            $('.swiper-wrapper').css({'transform' : 'translate3d(0px, 0px, 0px)', 'transition-duration' : '700ms'});
            $('.left-btn').hide();
            $('.right-btn').show();
            $('.site-intro p').css({'transform':'translateY(0)', 'opacity' : '1', 'transition':'transform 0.3s cubic-bezier(0, 0.36, 0.32, 1), opacity 0.2s ease-in;'});
            $toggle2 = 0;
            $toggle = 0;
          };
        });
          }

          if (newWindowWidth <= 1280 && newWindowWidth >= 1025) {
            var $toggle = 0;
            var $toggle2 = 0;
          $('.right-btn').click(function(){
            
              if($toggle == 0){
                $('.swiper-wrapper').css({'transform' : 'translate3d(-853.333px, 0px, 0px)', 'transition-duration' : '700ms'});
                $('.left-btn').show();
                  $toggle = 1;
                  $toggle2 = 1;
              }else{
                $('.swiper-wrapper').css({'transform' : 'translate3d(-1706.67px, 0px, 0px)', 'transition-duration' : '700ms'});
                $('.left-btn').show();
                $('.right-btn').hide();
                $toggle = 0;
                $toggle2 = 0;
              };
          });
          $('.left-btn').click(function(){
              if($toggle2 == 0){
                $('.swiper-wrapper').css({'transform' : 'translate3d(-853.333px, 0px, 0px)', 'transition-duration' : '700ms'});
                $('.right-btn').show();
                  $toggle2 = 1;
                  $toggle = 1;
              }else{
                $('.swiper-wrapper').css({'transform' : 'translate3d(0px, 0px, 0px)', 'transition-duration' : '700ms'});
                $('.left-btn').hide();
                $('.right-btn').show();
                $('.site-intro p').css({'transform':'translateY(0)', 'opacity' : '1', 'transition':'transform 0.3s cubic-bezier(0, 0.36, 0.32, 1), opacity 0.2s ease-in;'});
                $toggle2 = 0;
                $toggle = 0;
              };
            });
        }
      }
