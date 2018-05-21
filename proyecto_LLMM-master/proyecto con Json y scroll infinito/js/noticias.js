window.onload =function(){

	$.getJSON( "noticias.json", function( jsonObject ) {
  	//en aquest punt l'objecte jsonObject correspon al fitxer
  	pintar( jsonObject );
	});

	function pintar(json){
	 $.each( json, function( i, empleado ) {
 	 $("#out").append( "<li id='" + i + "'>" + empleado.firstName+ " " + empleado.lastName + "</li>" );
 	}); 
	}
}