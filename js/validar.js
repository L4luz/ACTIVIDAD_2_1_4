$('#perros').click(function(){
    fn_consultarIndicador();
})
function fn_consultarIndicador() {
    $.getJSON('https://api.thedogapi.com/v1/breeds', function(data) {
        var respuesta = data;
        var seleccion = $('#perros option:selected').text();
        if(seleccion == 'CUALQUIERA') {
            $("#lista-perros tr").remove();
                var nroTotalImagenes = 6;
                var nroColumnasPorFila = 2;
                var selectorTablaHTML = "#lista-perros"
                var url = "https://api.thedogapi.com/v1/images/search?limit=1"+nroTotalImagenes
                //var url = "https://api.thedogapi.com/v1/breeds";
                
                generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Ver mas");
            ;
            
            function getBtnActionURL() {
                return "https://api.thedogapi.com/v1/images/search?q=air";
            }
            
           }
       else if(seleccion == '--SELECCIONE RAZA--'){
           
        }
        else if(seleccion == seleccion){
            $("#lista-perros tr").remove();
            var nroTotalImagenes = 1;
                var nroColumnasPorFila = 1;
                var selectorTablaHTML = "#lista-perros"
                var url = "https://api.thedogapi.com/v1/images/search?name="+seleccion

                var filter;
                for (i = 0; i < data.length; i++) {
                    var nombre = data[i].name;
                    if(seleccion.trim() == nombre.trim()){
                        filter = data[i];
                    }
                } 
                
                var imageUrl = filter.image.url;
                document.getElementById("fotoDetalle").src = imageUrl;
                $("#lblKilo").html(filter.weight.metric);
                $("#lblCm").html(filter.height.metric);
                $("#lblNombre").html(filter.name);
                $("#lblVida").html(filter.life_span);
                generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Ver mas");
            ;

            function getBtnActionURL() {
                return "https://api.thedogapi.com/v1/images/search?name="+seleccion;
            }
            
        }
         else {
            $('#txt_valor').val('Elige una opcion');
        }
    });

}

function mostrarPerros(){
    
    $('#myModal').modal('show');
    //$("#tabla_detalle").show();
}