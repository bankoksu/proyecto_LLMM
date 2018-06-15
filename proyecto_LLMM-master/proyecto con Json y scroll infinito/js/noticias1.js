$(document).ready(function() {
  $("#boton").on("click",function(){
    $("#boton").hide();
    console.log("estoy empezando esto");  
      $.getJSON( "./noticias2.json", function( jsonObject ) {
      //en aquest punt l'objecte jsonObject correspon al fitxer
      console.log(jsonObject);
      pintar( jsonObject );

    function pintar(json){
    $.each( json, function( i, empleado ) {
      $("#agregador").append("<h2>"+empleado.titulo+"<h2>");
      $("#agregador").append("<p>"+empleado.fecha+"</p>");
      $("#agregador").append("<img class='img-fluid float-left img-thumbnail mr-4' src='" + empleado.img + "'>");
      $("#agregador").append("<p>"+empleado.texto+"</p>");

  })};
})}
 )})