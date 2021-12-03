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
})