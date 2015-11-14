var map = L.map('map').setView([40.7518685, -73.984857], 11);
    
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19})
    .addTo(map);



var lmarker;
var laborDayData = "https://data.cityofnewyork.us/resource/m2gt-6ver.json?$$app_token=EANt8JqkhUJOacXDyShkPtTSx";

function ajax() {
    return $.ajax({
        url: laborDayData,
        dataType: "json"
    });
}

function displayData(x){
    x.success(function(data){
        for (var i = 0; i < data.length; i++){
        lmarker = L.circleMarker(new L.LatLng(data[i].latitude, data[i].longitude))
            .setRadius(4)
            .addTo(map)
            .bindPopup(data[i].created_date);
        }
    });
}

var promise = ajax();
displayData(promise);

//console.log(lmarker);

laborLayer = L.tileLayer(lmarker);
//halloweenLayer = L.tileLayer(hmarker);

var overlay = {
    //"Halloween": halloweenLayer,
    "Labor Day": laborLayer
};

L.control.layers(overlay).addTo(map);

//console.log(halloweenData);
