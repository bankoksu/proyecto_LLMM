window.onload =function(){

  var contador = 0;
  var stop = true;
  var final = false;
  (function(){
  $(window).scroll(function() {
    // How much the user has scrolled
    const scrollTop = $(window).scrollTop();
    // windowHeigth is the height of the window
    const windowHeight = $(window).height();
    // documentHeight could be larger than windowHeight
    const documentHeight = $(document).height();
    const offset = 10;
    // add windowHeight is neccessary to get to the bottom
    if(scrollTop + windowHeight > documentHeight - offset && stop == true) {
      console.log("estoy en la funcion scroll infinito");  
      $.getJSON( "./noticias2.json", function( jsonObject ) {
      //en aquest punt l'objecte jsonObject correspon al fitxer
      console.log(jsonObject);
      pintar( jsonObject );

  });

    function pintar(json){
    $.each( json, function( i, empleado ) {
      console.log(i);
      contador =+ 1;
      stop = false;
      final = true;
      console.log(contador);
      /*$("#agregador").append("<div class='jumbotron text-center' id='publi'><h2>No quedan mas noticias para mostrar vuelve más tarde :P</h2></div>");*/
      $("#agregador").append("<h2>"+empleado.titulo+"<h2>");
      $("#agregador").append("<p>"+empleado.fecha+"</p>");
      $("#agregador").append("<img class='img-fluid float-left img-thumbnail mr-4' src='" + empleado.img + "'>");
      $("#agregador").append("<p>"+empleado.texto+"</p>");

      if (contador > 4){
          $("#agregador").append("<p> no tengo más noticias</p>");
          $("#agregador").append("<p>:P vuelve mas tarde</p>");
      }
      /*$("#agregador").append("<div class='jumbotron text-center'" +" id='publi'>" +"<h2>"+empleado.titulo+ "</h2>" +"<img src='"+empleado.img+"'"+" class='imagen' alt="""">"+"<p>"+empleado.fecha+"</p>"+"<p>"+ empleado.texto+"</p>"+"</div>");*/
  }); 
  }

    }
    if(scrollTop + windowHeight > documentHeight - offset && final == true) {
      $("#agregador2").append("<h2>No tenemos mas noticias por el momento</h2>");
      /*$("#agregador2").append("<img class='img-fluid float-left img-thumbnail mr-4' src='nonoticia.jpg'>");*/
      $("#agregador2").append("<p>vuelve en otro momento para más actualidad del mundo natural </p>");
      $("#agregador2").append("<h2>Te esperamos, recuerda seguirnos en nuestra redes sociales</h2>")
      final = false;
    }

  });
}());



}  // Si la página no es la página principal la función parará aqui por lo que no cargará las entradillas.
/*(function(){
  $(window).scroll(function() {


    const scrollTop = $(window).scrollTop();

    const windowHeight = $(window).height();

    const documentHeight = $(document).height();
    const offset = 1;


    if(scrollTop + windowHeight > documentHeight - offset) {
      const divs = $('div').length;
      $('#agregador').append(() => {
        let result = '';
        console.log("estoy antes de leer el json");
        var noticias = $.getJSON( "../noticias2.json")
        console.log(jsonObject);
        $.each( noticias, function(i,texto)

        });
    }
  )};
}());
 */
		  	//en aquest punt l'objecte jsonObject correspon al fitxer
		  /*	
		  	pintar( jsonObject );
			};

			function pintar(json){
			  {
			 console.log("estoy donde se supone que pinta")
			 console.log(titulo);
			 console.log(texto);
		 	 $("#agregador").append( "<li id='" + i + "'>" + texto.titulo + " " + texto.texto + "</li>" );
		 	console.log(i);
			console.log(j);
		 	}); 
			}*/
/*
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
/*
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

/*
/*
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