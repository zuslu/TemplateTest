$(document).ready(function(){
	 $(document).scroll(function(){
	 	var docScroll = $(document).scrollTop()
		var	photoOffset = $("#photoWrapper").offset().top - 50
		if(docScroll > photoOffset)
		{
			$("#photoWrapper").addClass("change")
			$("#profile").addClass("change")
		}
		else
		{
			$("#photoWrapper").removeClass("change")
			$("#profile").removeClass("change")		
		}
	})
});



  
  
