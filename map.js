//setting up map and tileLayer
var map = L.map('map').setView([40.7518685, -73.984857], 11);
    
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19})
    .addTo(map);

//gets dataset and formats it in json
var lmarker;
var laborDayData = "https://data.cityofnewyork.us/resource/m2gt-6ver.json?$$app_token=EANt8JqkhUJOacXDyShkPtTSx";

function ajax() {
    $.ajax({
        url: laborDayData,
        error: function(){
            console.log("An error has occurred");
        },
        dataType: 'json',
        success: function(data){
            for (var i=0; i < data.length; i++){
                lmarker = L.circleMarker(new L.LatLng(data[i].latitude, data[i].longitude))
                    .setRadius(4)
                    .addTo(map)
                    .bindPopup(data[i].created_date);
            }
        }
    });
}

$.when(ajax()).done(function layerControl(lmarker) {
    var overlay = {
        "Labor Day": L.tileLayer(lmarker)
    };
    L.control.layers(overlay).addTo(map);
});
