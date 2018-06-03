window.onload =function(){

	/*$.getJSON( "../noticias2.json", function( jsonObject ) {
  	//en aquest punt l'objecte jsonObject correspon al fitxer
  	pintar( jsonObject );
	});
	var id = 1 
	function pintar(json){
	 $.each( json, function(titulo,texto) {
 	 $("#out").append( "<li id='" + id + "'>" + noticias.titulo+ " " + noticas.texto + "</li>" );
 	console.log(i);
	console.log(j);
 	}); 
	}*/


	$(function(){
    //cargar comunidades
    $.getJSON( "../noticias2.json", function( jsonObject ) {
        ponerComunidades( jsonObject );
    });

    //onclick en verinfo
    /*$("#verinfo").click(function() {
        var v=$("#comunidades").val();
        if (v!=0) window.location = "/comunidad/"+$("#comunidades").val();
        else alert('Selecciona una comunidad');
    });*/
});

function ponerComunidades(json){
     $.each( json, function( i, comunidad ) {
     	console.log(i);
     	console.log(j);
         //dos formas de hacer lo mismo, la segunda es más adecuada.
         //$("#comunidades").append( "<option value='" + comunidad.slug + "'>" + comunidad.comunidad + "</option>" );
         $('#agregador').append($("<h1>" + i + "</h1>","<p>" + comunidad +"</p>"));
         //"slug" es la parte de la url, por si hay que visitar la página de la comunidad (no va con vuestro proyecto, es un ejemplo)
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