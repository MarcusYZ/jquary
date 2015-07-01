$('document').ready(function()
{
// default is default switch
		$('#switcher-default').addClass('selected');
// it retrives the button id based on clicks
		$('#switcher button').click(function(event){
				var bodyClass = this.id.split('-')[1];
//based on the click then according to that namecss class appends
		$('body').removeClass().addClass(bodyClass);
		// and removes seleted class before ... here we are removing all id because we dont know which is id is selected
		$('#switcher button').removeClass('selected');
		// adding the selected buttion selected class
		$(this).addClass('selected');
		event.stopPropagation();
	
	});
	});
