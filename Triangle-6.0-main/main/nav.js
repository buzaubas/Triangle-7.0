
$(function(){
	function Anton()
	{
		$('#home').toggleClass('none');
		$('#home').removeClass('anim');
	
		
	}
	
	
	
	
	function changeBlockNone()
	{
		$('#home').toggleClass('anim');
	
		
	}
	
	
	
	$('#burgm').on('click', function(){		
		Anton();	
		
	});
	
	$('#closem').on('click', function(){		
		changeBlockNone();	
		setTimeout(Anton, 1000);	
		
	});
	
	
	
});