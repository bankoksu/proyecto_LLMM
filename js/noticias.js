window.onload =function(){
	/*var doc = [
{ 
"titulo":"contenido de la misma alsdfagfgfdgfdgfdsasdf",
"texto":"primera noticia con su titulo"

},
{
"titulo":"asdfasfasdsdadafasdfasdjnhsfgjjukikfykujk",
"texto":"segunda noticia con su titulo"

},
{
"titulo":"asdasdasdasdadsasd",
"texto":"pruebas pruebas"

}

]*/
	/*console.log(doc);*/
	/*esta parte crea la seccion del scroll infinito */
(function(){
  $(window).scroll(function() {
  	var contador = 0
  	var contador2 =0

    const scrollTop = $(window).scrollTop();

    const windowHeight = $(window).height();

    const documentHeight = $(document).height();
    const offset = 1;


    if(scrollTop + windowHeight > documentHeight - offset) {
      const divs = $('div').length;
      $('#agregador').append(() => {
        let result = '';
        var textoparse = doc
        /*if (contador > 3) {
        	if (contador2 > 0){
        		result = ""
        	}else{
        		result += `<div>no quedan mas noticias para mostrar</div>`
        		contador2 += 1
        	}
        } */
        for (var i = 0; i< doc.length; i++){
        	result += ('<h2>' + textoparse[i].titulo + '</h2>' +'<p>' +textoparse[i].texto +'</p>')
        }
        /*for (let i = divs + 1; i <= divs + 1; i++) {
          result += `<div>Content ${i}</div>`
          contador += 1*/
          /*if (contador = 3){
          	if(contador2 >){
          	 	return ""
          	}else{
          		result += `<div>no quedan mas noticias para mostrar</div>`
        		contador2 += 1
          	}
          }*/
       /* }*/
        return result;
      });
    }
  });
}());
	     /*   console.log("estoy antes de leer el json");
		 	$.getJSON( "../noticias2.json"), function( jsonObject ) {
		  	//en aquest punt l'objecte jsonObject correspon al fitxer
		  	console.log(jsonObject);
		  	pintar( jsonObject );
			};

			function pintar(json){
			 $.each( json, function(i,texto) {
			 console.log("estoy donde se supone que pinta")
			 console.log(titulo);
			 console.log(texto);
		 	 $("#agregador").append( "<li id='" + i + "'>" + texto.titulo + " " + texto.texto + "</li>" );
		 	console.log(i);
			console.log(j);
		 	}); 
			}*/















}
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