$(document).ready(function(){

  $(".filter-button").click(function(){
  var value = $(this).attr('data-filter');
  
  if(value == "all")
  {
  
  $('.filter').show('1000');
  $('.filter').children("a").attr('data-fancybox','all');
  }
  else
  {
  
  $(".filter").not('.'+value).hide('3000');
  $('.filter').filter('.'+value).show('3000');
  $('.filter').filter('.'+value).children("a").attr('data-fancybox',value);
  }
  });
  
  if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
  
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })




  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  });
 