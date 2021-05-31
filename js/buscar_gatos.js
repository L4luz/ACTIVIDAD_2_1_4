
function get_breeds(url) {
    var urrll = url + '/breeds'
    $.get(urrll, function(response){
        $.each(response, function(index, element) {
            $("#gatos").append("<option value='" + element.name + "'>" + element.name + "</option>");
        });
    });
}

function get_breeds_by_name(url, name) {
    var urrll = url + '/images/search?q=' + name;
    $.get(urrll, function(response){
        $.each(response, function(index, element) {
            $("#dog_image").append("<img id=\"imagen-"+element.id+"\" src=\""+element.url+"\" class=\"img-thumbnail\" style=\"width:200px;height:150px;\" />");
        });
    });
}