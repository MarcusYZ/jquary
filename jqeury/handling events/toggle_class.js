//$('document').ready(function(){

//	$('#switcher h3').click(function (){
//		$('#switcher button').toggleClass('hidden');
//	});

//});

$('document').ready(function(){
	$('#switcher h3').click(function(event){
		if(event.target == this){
			$('#switcher button').toggleClass('hidden')
		}
	});
});