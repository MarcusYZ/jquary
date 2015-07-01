$('document').ready(function(){

	$('switcher-default').addClass('selected')
	$('#switcher').click(function(event){

		if($(event.target).is('button') )
		{
			var bodyClass = event.target.id.split('-')[1]

			$('body').removeClass().addClass(bodyClass);
			$('#switcher button').removeClass('selected  ');
			$(event.target.id).addClass('selected')

		}
		else
		{
				$('#switcher button').toggleClass('hidden');

		}

	});
});