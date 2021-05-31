$('#perros').click(function(){
    fn_consultarIndicador();
})
function fn_consultarIndicador() {
    $.getJSON('https://api.thedogapi.com/v1/breeds', function(data) {
        var respuesta = data;
        var seleccion = $('#perros option:selected').text();
        if(seleccion == 'CUALQUIERA') {
    
                var nroTotalImagenes = 6;
                var nroColumnasPorFila = 2;
                var selectorTablaHTML = "#lista-perros"
                var url = "https://api.thedogapi.com/v1/images/search?limit=1"+nroTotalImagenes
            
                generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Ver mas");
            ;
            
            function getBtnActionURL() {
                return "https://api.thedogapi.com/v1/images/search?q=air";
            }
            
           }
       else if(seleccion == '--SELECCIONE RAZA--'){
           
        }
        else if(seleccion == seleccion){
            
        }
         else {
            $('#txt_valor').val('Elige una opcion');
        }
    });

}