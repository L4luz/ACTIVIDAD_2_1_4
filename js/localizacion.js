
$(document).ready(function() {

    $("#tiempo").hide();
    $("#ajax-loader").hide();

    if (navigator.geolocation) {
        
        $("#ajax-loader").show();

        navigator.geolocation.getCurrentPosition(showWeather, showError);
    } else  {
        console.log("No se pudo obtener la geolocalización del usuario");
    }
});


function showWeather(position) {
    var coordenadas = new String(position.coords.latitude +","+ position.coords.longitude);

    console.log("Coordenadas: "+coordenadas);

    var apiURL = "http://api.weatherstack.com/current";
    var apiParameters = 
        {
            "access_key":"3c702f579e2f1ceb091e30125b98d595",
            "units": "m",
            "query":coordenadas
        } 

    $.get(apiURL, apiParameters, function(response) {
        console.log("El tiempo en "+response.location.name);
        console.log("Temperatura: "+response.current.temperature);
        console.log("viento "+response.current.wind_speed);
        console.log("precipitación: "+response.current.precip);
        console.log("presión atmosférica: "+response.current.pressure);
        console.log("humedad: "+response.current.humidity);
        console.log("icono: "+response.current.weather_icons[0]);   
        
        $("#tiempo-lugar").html(response.location.name);
        $("#tiempo-temperatura").html(response.current.temperature + " ºC");
        $("#tiempo-viento").html(response.current.wind_speed + " Kms/hr");
        $("#tiempo-precipitaciones").html(response.current.precip + " mm");
        $("#tiempo-presion").html(response.current.pressure + " mb");
        $("#tiempo-humedad").html(response.current.humidity+ " %");
        $("#tiempo-icono").attr("src",response.current.weather_icons[0]);

        $("#ajax-loader").hide();
        $("#tiempo").fadeIn(2000);
    });
}

function showError(error) {

    $("#ajax-loader").hide();

    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("El usuario ha denegado su geolocalización");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
    }
}