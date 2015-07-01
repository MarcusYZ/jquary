$('document').ready(function(){
	console.log('hello sir')
	$('tr:even').addClass('even')
});
 
  $('document').ready(function(){
  	$('tr:odd').addClass('alt')
  });

  $('document').ready(function(){
  	$('tr:nth-child(odd)').addClass('alt');
  	$('td:contains(Henry)').addClass('highlight');
  });