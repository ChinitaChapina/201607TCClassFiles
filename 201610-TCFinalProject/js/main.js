(function($,Drupal) {
  Drupal.behaviors.sig = {
    attach: function (context, settings) {
      // adding double tap for responsive
      var mq = window.matchMedia( "(min-width: 922px)" );
      if (mq.matches) {
        $('header#navbar nav#main-menu ul.menu li:has(ul)').doubleTapToGo();
      }

      // responsive icon
      $('.menu-bars').on('click', function () {
        // get the main menu object
        $menu = $(this).parent().find('#main-menu');

        // check to see if menu is set to display as block
        if($menu.css('display') == 'block') {
          // set it to display none
          $menu.css('display', 'none');
        } else {
          // set it to display as block
          $menu.css('display', 'block');
        }
      });


      $(window).on('resize', function() {
        //this = window
        var win = $(this);
        // if the browser width is larger than 923px
        if (win.width() >= 923) {
          $('#main-menu').css('display', 'block');
        } else {
          $('#main-menu').css('display', 'none');
        }
      });

      if ($('body').hasClass('page-node-749')) {
        var active = $('.sidebar .menu li').first();
        $(active).children('a').css('color','#005bbb');
      }
      else if ($('body').hasClass('page-node-748')) {
        var active = $('.sidebar .menu li:nth-child(2)');
        $(active).children('a').css('color','#005bbb');
      }
      else if ($('body').hasClass('page-node-747')) {
        var active = $('.sidebar .menu li:nth-child(3)');
        $(active).children('a').css('color','#005bbb');
      }

      if ($('body').hasClass('page-node-747') || $('body').hasClass('page-node-748') ||  $('body').hasClass('page-node-749') || $('body').hasClass('page-node-726') || $('body').hasClass('page-node-730')){
        $('.field-item img').css('visibility','hidden');
        $('.field-item img').css('visibility','visible').hide().fadeIn(2000);
      }


      if($('body').hasClass('page-taxonomy-term-165')){
        var active = $('.sidebar .menu li').first();
        $(active).children('a').css('color','#005bbb');
      }
      else if ($('body').hasClass('page-category-fiduciary-insights-governance-outsourcing')) {
        var active = $('.sidebar .sub-menu li').first();
        $(active).children('a').css('color','#005bbb');
      }
      else if ($('body').hasClass('page-category-fiduciary-insights-investment-policy')) {
        var active = $('.sidebar .sub-menu li:nth-child(2)');
        $(active).children('a').css('color','#005bbb');
      }
      else if ($('body').hasClass('page-category-fiduciary-insights-investment-risk-management')) {
        var active = $('.sidebar .sub-menu li:nth-child(3)');
        $(active).children('a').css('color','#005bbb');
      }


      // Flexslider
      // check to see if function flexslider exists
      if ($('body').hasClass('front')) {
        $('.flexslider').flexslider({
          animation: "slide",
          animationSpeed: 1200,
          slideshowSpeed: 7000,
          pausePlay: true,
          start: function(slider) {
            var firstSlide = $("li.flex-active-slide");
                firstSlide.children(".views-field-body").animate({bottom: '0'},1000);
          },
          before: function(slider) {
            var curSlide = slider.find("li.flex-active-slide");
            $(curSlide).children(".views-field-body").css('bottom','-275px');
          },
          after: function(slider) {
            var curSlide = slider.find("li.flex-active-slide");
                $(curSlide).children(".views-field-body").animate({bottom: '0'},1000);
          }
        });
      }



      // Focused solutions
      if ($('.paragraphs-item-focused-solutions')) {
        $items = $('.paragraphs-item-focused-solutions h2');
        $items.each(function(index) {
          $this = $(this);
          $this.on('click', function() {
            $div = $(this).parent().find('.field.field-name-field-body');
            $div.toggle("slow");
            $div.parent().parent().toggleClass('white');
          });
        });
      }

      $('.view-focuspoint-webinars .bluehover h4').each(function() {
        var webinarTitle = $(this).text();
        if (webinarTitle == 'The Art and Science of Manager Termination'){
          $(this).siblings('a').attr('href','/library/focus-point-webinars/artandsciencemanagertermination');
        }
      });

      if($('body').hasClass('page-our-leadership'))  {
        $('.block-views .view-content').hide();
        $('.block-views .view-header').each(function(){
          $this = $(this).find('a').attr('href');
          var active = $(this).parent().find(".view-content");
          if(window.location.pathname == $this){
            $(active).show();
            var anchor = $(active).parent().find(".view-header a");
            var click = $(active).parent().find(".view-header")
            $(anchor).replaceWith(function(){
               return $("<span style='cursor: pointer; font-size: 15px; color: #005bbb;'>" + $(this).html() + "</span>");
            });
            $(click).click(function(){
             $(active).slideToggle();
            });
          }
        });
      }


      if($('body').hasClass('node-type-team-members')) {
        $('.block-views .view-content').hide();
        $('.active').parents('.view-content').show();
      }


      $('.front .slides > li').each(function(){
        var link = $(this).find('.views-field-field-image > .field-content > a').attr('href');
        $(this).wrap('<a href="' + link +'"></a>');
        var pops = $(this).parent("a").attr("href");
        if ((pops.indexOf("youtu") !== -1) && !(pops.indexOf(location.hostname) !== -1)){
          $(this).prepend('<img id="pressplay" style="height: 70px; width: 70px; position: absolute;" src="/profiles/sig/themes/sig/img/right-arrow-slide.png" />');
        }
      });
      var cboxOptions = {
        iframe: true,
        width: '95%',
        height: '95%',
        maxWidth: '960px',
        maxHeight: '585px',
        slideshowAuto: true,
        href: function(){
          var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
          if (videoId && videoId[1]) {
              return 'https://youtube.com/embed/'+videoId[1]+'?rel=0&wmode=transparent&modestbranding=1&autoplay=1';
          }
        }
      }
      $('.youtube').colorbox(cboxOptions);
      $(window).resize(function(){
          $.colorbox.resize({
            width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
            height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
          });
      });

      $('.file-video-youtube', context).once( 'customboxFunction', function (){
          $(this).each(function(){
            var tubeId = $(this).find(".file > a").attr('href');
            $($(this).parent("div")).wrap("<a class='youtube' href='" + tubeId + "'></a>");

            var cboxOptions = {
              iframe: true,
              width: '95%',
              height: '95%',
              maxWidth: '960px',
              maxHeight: '585px',
              slideshowAuto: true,
              href: function(){
                var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
                if (videoId && videoId[1]) {
                    return 'https://youtube.com/embed/'+videoId[1]+'?rel=0&wmode=transparent&modestbranding=1&autoplay=1';
                }
              }
            }
            $('.youtube').colorbox(cboxOptions);
            $(window).resize(function(){
                $.colorbox.resize({
                  width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
                  height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
                });
            });
            $(this).prepend('<img id="pressplay" style="height: 70px; width: 70px; position: absolute;" src="/profiles/sig/themes/sig/img/right-arrow-slide.png" />');
          });
      });

      $('.flexslider .slides > a').each(function(){
        var thisLink = $(this).attr("href");
        var localMaybe =  thisLink.indexOf(location.hostname);
        // if the link is of another site and that other site is youtube do something
        if(!(localMaybe !== -1) && (thisLink.indexOf("youtu") !== -1)){
          $(this).addClass("tuber");
          var cboxOptions = {
            iframe: true,
            width: '95%',
            height: '95%',
            maxWidth: '960px',
            maxHeight: '585px',
            slideshowAuto: true,
            href: function(){
              var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
              if (videoId && videoId[1]) {
                  return 'https://youtube.com/embed/'+videoId[1]+'?rel=0&wmode=transparent&modestbranding=1&autoplay=1';
              }
            }
          }
          $('.tuber').colorbox(cboxOptions);
          $(window).resize(function(){
              $.colorbox.resize({
                width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
                height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
              });
          });
        }
      });

    }
  }
})(jQuery,Drupal);
