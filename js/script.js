$(window).on("load", function() {
    "use strict";
    //  ============= MOBILE RESPONSIVE MENU ===============

    $(".menu-bar").on("click", function(){
      $(this).toggleClass("active");
      $(".mobile-menu").toggleClass("active");
    });

    $(".mobile-menu ul ul").parent().addClass("menu-item-has-children");
    $(".mobile-menu ul li.menu-item-has-children > a").on("click", function() {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    });

    $(".mobile-menu .menu-bar").on("click", function() {
      $("header .menu-bar").removeClass("active");
    });


    /*==============================================
                    SCROLL TO TOP
    ===============================================*/


    $('.scrollTop').on("click", function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });


    /*==============================================
                      PAGE LOADER
    ===============================================*/


    $('.page-loading').fadeOut();


    // ======================== ACCORDION TABS ========================

    $(".toggle").each(function(){
        $(this).find('.content').hide();
        $(this).find('h2:first').addClass('active').next().slideDown(500).parent().addClass("activate");
        $('h2', this).on("click touchstart", function() {
            if ($(this).next().is(':hidden')) {
                $(this).parent().parent().find("h2").removeClass('active').next().slideUp(500).removeClass('animated fadeInUp').parent().removeClass("activate");
                $(this).toggleClass('active').next().slideDown(500).addClass('animated fadeInUp').parent().toggleClass("activate");
            }
        });
    });


    //  ==================== SCROLLING FUNCTION ====================

    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $("header").addClass("fixed animated slideInDown");
        } else if (scroll < 30) {
            $("header").removeClass("fixed animated slideInDown")
        }
    });

    function sendMail() {
      if($('#contact-form').length){
        $('#submit').on("click", function(){
          var form = '#contact-form';
          var name = $('#contact-form .name').val();
          var email = $('#contact-form .email').val();
          if(name == '' || email == '')
          {
            $('#contact-form .response').html('<div class="failed">Porfavor, complete los campos de nombre y correo electrónico.</div>');
            return false;
          }
          $.ajax({
            url:"sendemail.php",
            method:"POST",
            data: $(form).serialize(),
            beforeSend:function(){
                $('#contact-form .response').html('<div class="text-info">Enviando...</div>');
            },
            success:function(data){
                $('form').trigger("reset");
                $('#contact-form .response').fadeIn().html(data);
                setTimeout(function(){
                    $('#contact-form .response').fadeOut("slow");
                }, 5000);
            },
            error:function(){
                $('#contact-form .response').fadeIn().html(data);
            }
          });
        });
      }
    } 

});


