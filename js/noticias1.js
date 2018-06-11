/*$(document).ready(function() {
      // use esta configuracion simple para valores por defecto
      //$('div.expandable p').expander();
      // *** O ***
      // configure de la siguiente manera
      $('div.expandable p').expander({
      slicePoint: 80, // si eliminamos por defecto es 100 caracteres
      expandText: '[...]', // por defecto es 'read more...'
      collapseTimer: 5000, // tiempo de para cerrar la expanción si desea poner 0 para no cerrar
      userCollapseText: '[^]' // por defecto es 'read less...'
    });
  });*/


$(document).ready(function(){   
  $(".more").toggle(function() {
      $(this).text("Leer menos...").siblings(".complete").show();
  }, function() {
      $(this).text("Leer mas...").siblings(".complete").hide();
  }); 
});