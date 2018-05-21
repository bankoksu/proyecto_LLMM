window.onload =function(){

	$.getJSON( "noticias.json", function( jsonObject ) {
  	//en aquest punt l'objecte jsonObject correspon al fitxer
  	pintar( jsonObject );
	});

	function pintar(json){
	 $.each( json, function(i,j) {
 	 $("#out").append( "<li id='" + i + "'>" + empleado.firstName+ " " + empleado.lastName + "</li>" );
 	console.log(i);
	console.log(j);
 	}); 
	}
}
/*
cosas que me explico juanan :P
$(json).each(function(k,v){
	console.log(k);
	console.log(v);
})

$("h1").appendTo("#id")

$("h1")  = // get elements by tag name
$(".class") = // get elements by class name
$("#id")

$.ajax( {

});

.appentTo

.class

.attr

var Titutlo = gel

$(titulo).appençto

.0append()

*/