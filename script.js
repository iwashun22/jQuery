'use strict';
// $(document).ready(function(){

   // code goes here

// })


// this is exact same as code above. 
// It will wait until the document loads up, so should not forget to include
$(function(){

   // code goes here

   $('#header').hide().delay(1000).fadeToggle(1000);

   $('.btn').on('click', function() {
      const boxId = $(this).attr('data-box-id');
      console.log(boxId);
      $('#'+boxId).toggleClass('red');

      $('#'+boxId).siblings().removeClass('red');
   })

   $('.nav-box.active').slideDown(300);
   let isReady = true;
   $('.nav li').on('click', function() {
      if(isReady){
         const listBtn = $(this);
         const index = listBtn.index();

         const selectedNavBox = $('.nav-box').eq(index);
        
         if(selectedNavBox.is('.active')){
            console.log('already active');
         }
         else {
            isReady = false;
            $('.nav-box.active').slideUp(300, function(){
               listBtn.addClass('active');
               listBtn.siblings().removeClass('active');
               selectedNavBox.addClass('active');
               selectedNavBox.siblings().removeClass('active');
               selectedNavBox.slideDown(300, function(){ 
                  isReady = true;
               });
            });
         }
      }
   })

   scrollImage(1000, 3000);
})

function scrollImage(slideSpeed = 1000, pauseDuration = 1000){
   const $imageSlider = $('.images-slider');

   const slideWidth = 600;

   let slider = setInterval(slide, pauseDuration);

   $imageSlider.on('mouseenter', function() {
      clearInterval(slider);
      slider = null
   }).on('mouseleave', function() {
      if(!slider)
      slider = setInterval(slide, pauseDuration);
   })

   function slide() {
      const $img_sli = $('.images-slider');
      const $img = $img_sli.find('img');
      const $f_img = $img.eq(0);
      $f_img.animate({marginLeft: '-='+slideWidth}, slideSpeed, function(){
         const src = $f_img.attr('src');
         $f_img.remove();
         $img_sli.append(`<img src="${src}" alt="image">`);
      });
   }
}