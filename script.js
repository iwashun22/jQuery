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

   $('.nav li').on('click', function() {
      const listBtn = $(this);
      const index = listBtn.index();
      listBtn.addClass('active');
      listBtn.siblings().removeClass('active');

      const selectedNavBox = $('.nav-box').eq(index);
      selectedNavBox.addClass('active');
      selectedNavBox.siblings().removeClass('active');
   })
})