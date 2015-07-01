$('document').ready(function(){

	$('#switcher button').live('click', function(){
		var bodyClass = event.target.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$('this').addClass('selected');
	});

});