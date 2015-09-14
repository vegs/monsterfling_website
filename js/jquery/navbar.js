$(document).ready(function() {
  /*
    START
  */
  var logoButton=$('#nav_logobutton');
  var logo = $('#nav_logo');
  var navbar = $('#nav_bar');
  // logoButton.hide();
  logo.hide();

  /*
    NAVBAR ANIMATION
  */
  $(window).scroll(function () {
      var scrollValue=$(window).scrollTop();
      //console.log(scrollValue)
    if (scrollValue > $('.banner').height()) {
      $('#nav_bar').addClass('nav-fixed');
    }
    if (scrollValue < $('.banner').height()+1) {
      $('#nav_bar').removeClass('nav-fixed');
      //$('#nav_bar').slideUp(200);
    }

    if (scrollValue > $('.banner').height()-50) {
      //$('#nav_logobutton').slideDown(200);
      $('#nav_logo').slideDown(200);

    }
    if (scrollValue < $('.banner').height()-49) {
      //$('#nav_logobutton').slideUp(200);
      $('#nav_logo').slideUp(200);
    }
  });


  /*
    SMOOTH SCROLL ---------  NB FIX THIS TO NOT RUIN LINKS WITH # IN MIDDLE
  */
  $('a[href*=#]').on('click', function(event){     
      console.log($(this).attr("href"))
      if($(this).attr("href").indexOf("#/") >= 0){
        //ngRoute
      }else{
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 300);
      }
  });

  /*
    ADDED EMAIL
  */


});