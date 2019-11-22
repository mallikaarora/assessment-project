$(document).ready(function()
{

    $('#submitWeather').click(function()
    {
        var city=$("#city").val();
        if(city!='')
        {
            $.ajax(
                {
                    url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city + "&units=metric"+"&APPID=9755d140e502747fee9fff02af4c288a",
                       type: "GET",
                    dataType:"jsonp",
                    success:function(data)
                    {
                     //console.log(data);
                     
                       var widget=show(data);
                       $("#show").html(widget);
                       $("#city").val(' ');
                    
                    }
                }
            );
        }
        else
        {
            $("#error").html('Field cannot be empty');
        }
    });
});

function show(data)
{
    return "<h3 style='font-size:40px; font-weight:bold;' class='text-center'>Current Weather for "+ data.name + "," + data.sys.country+ "</h3>" +
        "<h3><strong>Weather</strong>: "+   data.weather[0].main+"</h3>" +
         "<h3><strong>Description</strong>: "+   data.weather[0].description+"</h3>" +
         "<h3><strong>Temperature</strong>: "+   data.main.temp+"</h3>" +
         "<h3><strong>Wind Speed</strong>: "+   data.wind.speed+"</h3>" +
         "<h3><strong>Wind Direction</strong>: "+   data.wind.deg+"</h3>" ;


}