//setting up map and tileLayer
var map = L.map('map').setView([40.7518685, -73.984857], 11);
    
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19})
    .addTo(map);

//gets dataset and formats it in json
var hmarker;
var halloweenData = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?descriptor=Loud Music/Party&$where=UPPER(city) NOT LIKE "%STATEN%" AND created_date BETWEEN '2015-10-29T17:00:00' AND '2015-11-01T08:00:00'
";

function ajax() {
    $.ajax({
        url: halloweenData,
        error: function(){
            console.log("An error has occurred");
        },
        dataType: 'json',
        success: function(data){
            for (var i=0; i < data.length; i++){
                hmarker = L.circleMarker(new L.LatLng(data[i].latitude, data[i].longitude))
                    .setRadius(4)
                    .addTo(map)
                    .bindPopup(data[i].created_date);
            }
        }
    });
}

$.when(ajax()).done(function layerControl() {
    var overlay = {
        "Halloween": L.tileLayer(hmarker)
    };
    L.control.layers(overlay).addTo(map);
});
