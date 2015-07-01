$('document').ready(function(){

	$('#switcher h3').toggle(function(){
		$('#switcher button').addClass('hidden');},
		function()
		{ $('#switcher button').removeClass('hidden');

	});

});