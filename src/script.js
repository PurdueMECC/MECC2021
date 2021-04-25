$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      var $navlink = $(".navbar-link");
      var $navbrand = $(".navbar-brand-custom");
      var $navicon =$(".navbar-toggler-icon");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
      $navlink.toggleClass('scrolled', $(this).scrollTop() > 0);
      $navbrand.toggleClass('scrolled', $(this).scrollTop() > 0);
      $navicon.toggleClass('scrolled', $(this).scrollTop() > 0);
    });
  });
  
  $(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).ready(function(){
  setTimeout(function() {
    $(".loader").fadeOut("slow");
    $(".mainbody").toggleClass('scrollhide');
}, 500);
  
});