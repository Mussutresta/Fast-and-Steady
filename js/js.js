

$('#go').click(function() {
      var rabbit_width = $('#rabbitDiv').width();

var torty_width = $('#tortyDiv').width();

var road_width = $(window).width()- rabbit_width;


var rabbit_time = Math.floor( (Math.random() * 5000) + 1 );

var torty_time = Math.floor( (Math.random() * 5000) + 1 );
      
      $('#rabbitDiv').animate({
          left: road_width
          }, rabbit_time
       );
      
      $('#tortyDiv').animate({
          left: road_width
          }, torty_time
       );
    
    
    
if(rabbit_time < torty_time)
{   $('#raceInfoContainer').text("RABBIT!");
}
 else{  $('#raceInfoContainer').text("TORTY!"); 
 }
    
    
    $('#reset').click(function() {
        $('#rabbitDiv').css('left','0');
        $('#tortyDiv').css('left','0');
        $('#raceInfoContainer').text("The winner is...");
    });
  }
    
);