$(document).ready(function(){
    var score = 0;
    setInterval(function(){
    $('body').append(
              $("<img src='ball.png' id='fall'>"));
    $('#fall').animate({'top':'242px'}, 2000);
		$(document).keypress(function(e){
        var x = $('#fall').position();
        console.log(x.left);
           if(e.which == 32) {
           		$('#close').attr("src","open.png");
              $('#fall').animate({'top':'490px'},2000 );
           		setTimeout(function(){
           			$('#close').attr("src","closed.png");
           		},1000);
              
              $('#fall').fadeOut();
              setTimeout(function(){
                $("#fall").remove();
              },1500);
           }
		});
  },5000);
});