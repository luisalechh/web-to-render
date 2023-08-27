$(document).ready(function() {
  var contador = 1;
  $("#agregarParrafo").click(function() {
    $("#parrafosContainer").append(`<p>Párrafo ${contador}</p>`);
    contador++;
  });
});
