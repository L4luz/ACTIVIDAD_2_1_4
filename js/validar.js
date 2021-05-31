$('#cmb_indicador').click(function() {
    fn_obtenerValor();
})


function fn_obtenerValor() {
    $.getJSON('https://api.thedogapi.com/v1/breeds', function(data) {
       var respuesta = data;
       var seleccion = $('#cmb_indicador option:selected').text();
       if(seleccion == 'Afghan Hound') {
           $('#txt_valor').val(respuesta[1].name );
           $(document).ready(function() {
    
            var nroTotalImagenes = 6;
            var nroColumnasPorFila = 2;
            var selectorTablaHTML = "#lista-perros"
            var url = "https://api.thedogapi.com/v1/images/search?limit="+nroTotalImagenes
        
            generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Ver mas");
        });
        
        function getBtnActionURL() {
            return "https://api.thedogapi.com/v1/images/search?q=air";
        }
        
       } else if(seleccion == 'African Hunting Dog') {
        $('#txt_valor').val(respuesta[2].name );
       } else if(seleccion == 'Airedale Terrier') {
        $('#txt_valor').val(respuesta[3].name );
       }
       else if(seleccion == 'Akbash Dog') {
        $('#txt_valor').val(respuesta[4].name );
       }
       else if(seleccion == 'Akita') {
        $('#txt_valor').val(respuesta[5].name );
       }
       else if(seleccion == 'Alapaha Blue Blood Bulldog') {
        $('#txt_valor').val(respuesta[6].name );
       }
       else if(seleccion == 'Alaskan Husky') {
        $('#txt_valor').val(respuesta[7].name );
       } else {
           $('#txt_valor').val('Debe seleccionar una opción');
       }
   });
   
}/*
data[0].name;
"Affenpinscher"*/
