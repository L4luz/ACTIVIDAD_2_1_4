
function get_breeds(url) {
    var urrl = url + '/breeds'
    $.get(urrl, function(response){
        $.each(response, function(index, element) {
            $("#perros").append("<option value='" + element.name + "'>" + element.name + "</option>");
        });
    });
}

function get_breeds_by_name(url, name) {
    var urrl = url + '/images/search?q=' + name;
    $.get(urrl, function(response){
        $.each(response, function(index, element) {
            $("#dog_image").append("<img id=\"imagen-"+element.id+"\" src=\""+element.url+"\" class=\"img-thumbnail\" style=\"width:200px;height:150px;\" />");
        });
    });
}