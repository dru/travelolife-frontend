$(document).ready(function() {
  // show answer for first time
  if($('.faq .right .item.active').length > 0) {
    $('.faq .right .item.active .answer').slideDown();
  }

  $('.faq .right .item a').on('click', function() {
    // remove previous active
    if($(this).parent().siblings('.active').length > 0) {
      $(this).parent().siblings('.active').removeClass('active').children('.answer').slideUp();
    }

    $(this).parent().addClass('active').children('.answer').slideDown();
    return false;
  });
});