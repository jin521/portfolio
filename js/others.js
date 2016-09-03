
$(document).ready(function() {
      console.log('mouseover')

$(".profilepic").mouseover(function(){

      $(this).css({
        "opacity": "0.1",
        "width": "150px",
        "height": "150px",
      });
});

$(".profilepic").mouseout(function(){

      $(this).css({
        "opacity": "1",
        "width": "120px",
        "height": "120px",
      });
});


$(".grid2").mouseover(function(){

      $(this).css( "opacity", "1");
});


$(".gird2").mouseout(function(){

      $(this).css( "opacity", "0.5");

});



});
