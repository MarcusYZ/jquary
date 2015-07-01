$('document').ready(function(){

	$('#switcher').bind('click',function(event){
		if(!$(event.target).is('button'))
		{
			$('#switcher button').toggleClass('hidden');
		}

	});

	$('#switcher-narrow','#switcher-large').click(function(){
		$('switcher').unbind('click');
	});


});