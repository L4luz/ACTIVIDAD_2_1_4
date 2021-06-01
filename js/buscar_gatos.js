
function get_breeds(url) {
    var urrl = url + '/breeds'
    $.get(urrl, function(response){
        $.each(response, function(index, element) {
            $("#gatos").append("<option value='" + element.name + "'>" + element.name + "</option>");
        });
    });
}

function get_breeds_by_name(url, name) {
    var urrl = "https://api.thecatapi.com/v1/images/search?name=" + name;
    console.log(urrl);
    $.get(urrl, function(response){
        $.each(response, function(index, element) {
            $("#gato_img").append("<img id=\"imagen-"+element.id+"\" src=\""+element.url+"\" class=\"img-thumbnail\" style=\"width:200px;height:150px;\" />");
        });
    });
}