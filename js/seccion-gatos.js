$(document).ready(function() {

    var url_apiGatos = "https://api.thecatapi.com/v1";

    get_breeds(url_apiGatos);

    $('#perros').change(function() {
        if ($(this).val() !==  0) {
            get_breeds_by_name(url_apiGatos, $(this).val())
            console.log($(this).val());
        }
    });

});

function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
};

