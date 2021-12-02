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
   })
})