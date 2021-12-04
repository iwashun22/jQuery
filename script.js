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

   scrollImage();
})

function scrollImage(){
   const $imageSlider = $('.images-slider');
   const $images = $imageSlider.find('img');
   const $firstImage = $images.eq(0);
   let counter = 1;

   const pause = 1000;
   const slideSpeed = 1000;
   const slideWidth = 600;

   let slider = setInterval(slide, pause);

   $imageSlider.on('mouseenter', function() {
      clearInterval(slider);
      slider = null
   })

   $imageSlider.on('mouseleave', function() {
      if(!slider)
      slider = setInterval(slide, pause);
   })

   function slide() {
      $firstImage.animate({marginLeft: '-='+slideWidth}, slideSpeed, function(){
         counter++;
         if(counter === $images.length){
            counter = 1;
            $firstImage.css({marginLeft: 0});
         }
      });
   }
}