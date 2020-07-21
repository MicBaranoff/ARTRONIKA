(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){

    var rellax = new Rellax('.rellax');

    $(document).on('click', '.ukraine-map-section__block__point > img', function(){
        $('.ukraine-map-section__block__point').removeClass('active');
        $(this).parent().toggleClass('active');
    });

    $('.ukraine-map-section__block').click(function(){
        $('.ukraine-map-section__block__point').removeClass('active');
    });

    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.header-block__nav').toggleClass('active');
    });

    $('.qeustions-section__block__item-title').click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().find('.qeustions-section__block__item-text').slideToggle();
    });


    $('.modal-thanks__bg, .modal-thanks__block .close').click(function(){
        $('.modal-thanks').removeClass('active');
    });


    //map animation
    var prem = false;
    if($('.ukraine-map-section__block').length){
        $(window).on('scroll', function(){
            perm  = true;
            let offsetY = $('.ukraine-map-section__block').offset().top - $(window).scrollTop();
            if (offsetY < 400 ){
                $('.ukraine-map-section__block__point').removeClass('active');
                $('.ukraine-map-section__block__point-vinnitsa').addClass('active');
            }
        })
    }
   
    //END map animation

    // langs scripts 

    $('.header-block__langs__box a').click(function(e){
        e.preventDefault();
        $('.header-block__langs__box a').removeClass('active');
        $(this).addClass('active');
        $(this).insertBefore('.header-block__langs__box a');
        $(this).remove();

    });
    //END langs scripts 

    //fix header script
    if($(window).width() >= 960){
                var elem = $('#head_nav');     
     
            $(window).scroll(function(){
                var top = $(this).scrollTop();
                
                if (top > elem.height() * 2) {
                    elem.addClass('active');
                } else {
                    elem.removeClass('active');
                }
            });
    }

    //END fix header script


    //form validation

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

      $('body').on("blur" , 'input.email', function(e){
        let email = $(this).val();
        
      
        if (validateEmail(email) || email=='') {
            $(this).parent().find('span').fadeOut();
          $(this).removeClass('error');
        } else {
            $(this).parent().find('span').fadeIn();
            $(this).addClass('error');
        }
      });


      $('body').on("blur" , '.textt', function(e){
        let textt = $(this).val();
        if (textt.length < 3) {
          $(this).parent().find('span').fadeIn();
            $(this).addClass('error');
        } else {
            $(this).parent().find('span').fadeOut();
            $(this).removeClass('error');
        }
      });

    //END form validation


    //page active

    (function($){

        //find active url in menu
        var $curURL = document.location.href;
        $('.header-block__nav ul li').each(function() {
            var $linkHref = $(this).find('a').attr('href');
            if ($curURL.indexOf($linkHref) > -1) {
                $(this).addClass('active');
            }
        });
    
    })(jQuery);

    //Wnd page active
});
},{}]},{},[1]);
