$('document').ready(function(){

	$('#switcher').click(function(event){
		if(!$(event.target).is('button'))
		{
			$('#switcher button').toggleClass('hidden');
		}
	});

	$('#switcher-narrow','#switcher-large').click(function(){
		$('switcher').unbind('click');
	});


});