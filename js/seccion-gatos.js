
$(document).ready(function() {
    
    var nroTotalImagenes = 6;
    var nroColumnasPorFila = 2;
    var selectorTablaHTML = "#lista-gatos"
    var url = "https://api.thecatapi.com/v1/images/search?limit="+nroTotalImagenes

    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Cambiar Imagen");
});

function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
}