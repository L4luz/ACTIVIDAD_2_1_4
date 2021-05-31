$(document).ready(function() {

    var url_apiPerro = "https://api.thecatapi.com/v1";

    get_breeds(url_apiPerro);

    $('#perros').change(function() {
        if ($(this).val() !==  0) {
            get_breeds_by_name(url_apiPerro, $(this).val())
        }
    });

});

function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
};
