


$(document).ready(function() {
	
  $(".arrowcollapse:not(.open) div").slideToggle("fast");
  $(".arrowcollapse img").css("transform','rotate(180deg)");
  
  $(".arrowcollapse img").click(function() {
	 id = $(this).attr('id')
    $("#" + id + "-p").slideToggle("slow");
	
	if($(this).hasClass("open")){
		
		$(this).css('transform','rotate(00deg)')
    } else {
		$(this).css('transform','rotate(180deg)')
    }
	$(this).toggleClass("open");
	
    return false;
  });
  
  
  
  
});