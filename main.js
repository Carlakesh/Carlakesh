$(document).ready(function() {  
  $('.js-switcher').on('click', '.button', function() {
    var $that = $(this)
        ,ctx = $that.closest('.js-carousel')
        ,currentPhoto = $(this).closest('.js-carousel').find('.js-currentPhotoNum')
        ,img = $(this).closest('.js-carousel').find('.js-images')
        ,imgWidth = img.find('img').width()
        ,count = +currentPhoto.html()
        ,maxCount = +currentPhoto.data('quantity');
    
    if(ctx.hasClass('_wait')) return false;
    
    ctx.addClass('_wait');
    
    if ($(this).hasClass('js-prev')) {
      if(count === 1) {
      currentPhoto.html(maxCount);
      } else {
        currentPhoto.html(count - 1);
      }
      
      img.find("img:first").before(img.find("img:last").clone());
      img.css({marginLeft:-imgWidth});
      img.animate(
        {marginLeft:0},
        1000,
        function(){
          img.find('img:last').remove();
          ctx.removeClass('_wait');
        });
    }
    
    if ($(this).hasClass('js-next')) {
      if(count === maxCount) {
      currentPhoto.html(1);
      } else {
        currentPhoto.html(count + 1);
      }
      
      img.animate(
        {marginLeft:-imgWidth},
        1000,
        function(){
            img.find("img:last").after(img.find("img:first"));
            img.css({marginLeft:0});
            ctx.removeClass('_wait');
      });
    }
  });
});

$('.parallax-window').parallax({imageSrc: 'http://pulpypics.com/wp-content/uploads/2014/08/tumblr-25.jpg'});

