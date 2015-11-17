//setting up map and tileLayer
var map = L.map('map').setView([40.7518685, -73.984857], 11);
    
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19})
    .addTo(map);

//gets dataset and formats it in json
var hmarker;
var halloweenData = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?descriptor=Loud%20Music/Party&$where=UPPER(city)%20NOT%20LIKE%20%22%25STATEN%25%22%20AND%20created_date%20BETWEEN%20'2015-10-29T17:00:00'%20AND%20'2015-11-01T08:00:00'";

var halloweenLayer = $.ajax({
        url: halloweenData,
        error: function(){
            console.log("An error has occurred");
        },
        dataType: 'json',
        success: function(data){
            for (var i=0; i < data.length; i++){
                hmarker = L.circleMarker(new L.LatLng(data[i].latitude, data[i].longitude))
                    .setRadius(2)
                    .addTo(map)
                    .bindPopup(data[i].created_date);
            }
        }
    });

var overlays = {
    "Halloween" : halloweenLayer
};

L.control.layers(overlays).addTo(map);
