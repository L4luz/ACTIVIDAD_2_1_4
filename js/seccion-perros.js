$(document).ready(function() {

    var url_apiPerro = "https://api.thedogapi.com/v1";

    get_breeds(url_apiPerro);

    $('#perros').change(function() {
        if ($(this).val() !==  0) {
            get_breeds_by_name(url_apiPerro, $(this).val())
            console.log($(this).val());
        }
    });

});

function getBtnActionURL() {
    return "https://api.thedogapi.com/v1/images/search?limit=1";
};
