$('document').ready(function(){

	$('#switcher').click(function(event){
		if ($(event.target).is('button'))
		{
			var bodyClass = event.target.id

			$('body').removeClass().addClass(bodyClass);
			$('#switcher button').removeClass('selected');
			$(event.target).addClass('selected');
			event.stopPropagation();
		}
	});

});