/* Define base layers */
var url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
var attrib='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
var cartoDbMap = new L.TileLayer(url, {attribution: attrib}); 

/* create new layer group */
var layer_halloween = new L.LayerGroup();
var halloween_markers = new Array();

var layer_nye = new L.LayerGroup();
var nye_markers = new Array();

var layer_stp = new L.LayerGroup();
var stp_markers = new Array();

var layer_mdw = new L.LayerGroup();
var mdw_markers = new Array();

var layer_pr = new L.LayerGroup();
var pr_markers = new Array();

var layer_ind = new L.LayerGroup();
var ind_markers = new Array();

var layer_ldw = new L.LayerGroup();
var ldw_markers = new Array();

/* create custom marker which will represent complaints in layer 'layer_halloween' */
customMarker = L.circleMarker;

/*adds hmarkers from array to layer group*/
function AddPointsToHLayer() {
    for (var i=0; i<halloween_markers.length; i++) {
        halloween_markers[i].addTo(layer_halloween);
    }
} 
/*adds nyemarkers from array to layer group*/
function AddPointsToNLayer() {
    for (var i=0; i<nye_markers.length; i++) {
        nye_markers[i].addTo(layer_nye);
    }
}
//adds stpmarkers from array to layer group
function AddPointsToSLayer() {
    for (var i=0; i<stp_markers.length; i++) {
        stp_markers[i].addTo(layer_stp);
    }
}
//adds mdwmarkers from array to layer group
function AddPointsToMLayer() {
    for (var i=0; i<mdw_markers.length; i++) {
        mdw_markers[i].addTo(layer_mdw);
    }
}
//adds prmarkers from array to layer group
function AddPointsToPLayer() {
    for (var i=0; i<pr_markers.length; i++) {
        pr_markers[i].addTo(layer_pr);
    }
}
//adds indmarkers from array to layer group
function AddPointsToILayer() {
    for (var i=0; i<ind_markers.length; i++) {
        ind_markers[i].addTo(layer_ind);
    }
}
//adds ldwmarkers from array to layer group
function AddPointsToLLayer() {
    for (var i=0; i<ldw_markers.length; i++) {
        ldw_markers[i].addTo(layer_ldw);
    }
}

//halloween call
$.ajax({
    url: "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?descriptor=Loud%20Music/Party&$where=UPPER(city)%20NOT%20LIKE%20%22%25STATEN%25%22%20AND%20created_date%20BETWEEN%20'2015-10-29T17:00:00'%20AND%20'2015-11-01T08:00:00'",
    success: function(response) {
        $.each(eval(response), function(key, val) {      
            var lon=val.longitude;
            var lat=val.latitude;
            var date = val.created_date;            
            if (typeof lat === "undefined" || typeof lon === "undefined") {
            return;
            }
            marker = new customMarker([lat, lon], {
                title: "test",
                opacity: 0.4  
            }); 
            marker.bindPopup(date);
            marker.setRadius(3);
            halloween_markers.push(marker);
        });
        AddPointsToHLayer();
    }
});

//nye call
$.ajax({
    url: "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?descriptor=Loud%20Music/Party&$where=UPPER(city)%20NOT%20LIKE%20%22%25STATEN%25%22%20AND%20created_date%20BETWEEN%20'2014-12-31T17:00:00'%20AND%20'2015-01-01T08:00:00'",
    success: function(response) {
        $.each(eval(response), function(key, val) {      
            var lon=val.longitude;
            var lat=val.latitude;
            var date = val.created_date;   
            if (typeof lat === "undefined" || typeof lon === "undefined") {
            return;
            }
            marker = new customMarker([lat, lon], {
                title: "test",
                opacity: 0.4  
            }); 
            marker.bindPopup(date);
            marker.setRadius(3);
            nye_markers.push(marker);
        });
        AddPointsToNLayer();
    }
});
//stp call
$.ajax({
    url: "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?descriptor=Loud%20Music/Party&$where=UPPER(city)%20NOT%20LIKE%20%22%25STATEN%25%22%20AND%20created_date%20BETWEEN%20'2015-03-13T17:00:00'%20AND%20'2015-03-18T08:00:00'",
    success: function(response) {
        $.each(eval(response), function(key, val) {      
            var lon=val.longitude;
            var lat=val.latitude;
            var date = val.created_date;   
            if (typeof lat === "undefined" || typeof lon === "undefined") {
            return;
            }
            marker = new customMarker([lat, lon], {
                title: "test",
                opacity: 0.4  
            }); 
            marker.bindPopup(date);
            marker.setRadius(3);
            stp_markers.push(marker);
        });
        AddPointsToSLayer();
    }
});
//mdw call
$.ajax({
    url: "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?descriptor=Loud%20Music/Party&$where=UPPER(city)%20NOT%20LIKE%20%22%25STATEN%25%22%20AND%20created_date%20BETWEEN%20'2015-05-21T17:00:00'%20AND%20'2015-05-26T08:00:00'",
    success: function(response) {
        $.each(eval(response), function(key, val) {      
            var lon=val.longitude;
            var lat=val.latitude;
            var date = val.created_date;   
            if (typeof lat === "undefined" || typeof lon === "undefined") {
            return;
            }
            marker = new customMarker([lat, lon], {
                title: "test",
                opacity: 0.4  
            }); 
            marker.bindPopup(date);
            marker.setRadius(3);
            mdw_markers.push(marker);
        });
        AddPointsToMLayer();
    }
});
//pr call
$.ajax({
    url: "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?descriptor=Loud%20Music/Party&$where=UPPER(city)%20NOT%20LIKE%20%22%25STATEN%25%22%20AND%20created_date%20BETWEEN%20'2015-06-14T08:00:00'%20AND%20'2015-06-15T08:00:00'",
    success: function(response) {
        $.each(eval(response), function(key, val) {      
            var lon=val.longitude;
            var lat=val.latitude;
            var date = val.created_date;   
            if (typeof lat === "undefined" || typeof lon === "undefined") {
            return;
            }
            marker = new customMarker([lat, lon], {
                title: "test",
                opacity: 0.4  
            }); 
            marker.bindPopup(date);
            marker.setRadius(3);
            pr_markers.push(marker);
        });
        AddPointsToPLayer();
    }
});
//ind call
$.ajax({
    url: "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?descriptor=Loud%20Music/Party&$where=UPPER(city)%20NOT%20LIKE%20%22%25STATEN%25%22%20AND%20created_date%20BETWEEN%20'2015-07-02T17:00:00'%20AND%20'2015-07-05T08:00:00'",
    success: function(response) {
        $.each(eval(response), function(key, val) {      
            var lon=val.longitude;
            var lat=val.latitude;
            var date = val.created_date;   
            if (typeof lat === "undefined" || typeof lon === "undefined") {
            return;
            }
            marker = new customMarker([lat, lon], {
                title: "test",
                opacity: 0.4  
            }); 
            marker.bindPopup(date);
            marker.setRadius(3);
            ind_markers.push(marker);
        });
        AddPointsToILayer();
    }
});
//ldw call
$.ajax({
    url: "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?descriptor=Loud%20Music/Party&$where=UPPER(city)%20NOT%20LIKE%20%22%25STATEN%25%22%20AND%20created_date%20BETWEEN%20'2015-09-03T17:00:00'%20AND%20'2015-09-08T08:00:00'",
    success: function(response) {
        $.each(eval(response), function(key, val) {      
            var lon=val.longitude;
            var lat=val.latitude;
            var date = val.created_date;   
            if (typeof lat === "undefined" || typeof lon === "undefined") {
            return;
            }
            marker = new customMarker([lat, lon], {
                title: "test",
                opacity: 0.4  
            }); 
            marker.bindPopup(date);
            marker.setRadius(3);
            ldw_markers.push(marker);
        });
        AddPointsToLLayer();
    }
});



/* create map object */
var map = L.map('map', {
    center: [40.7518685, -73.984857],
    zoom: 11,
    fullscreenControl: true,
    fullscreenControlOptions: {
        position: 'topleft'
    },
    layers: [cartoDbMap]
});

var baseLayers = {
    //"Map": cartoDbMap,
};

var overlays = {
    "New Year's Eve": layer_nye,
    "Saint Patrick's Day": layer_stp,
    "Memorial Day Weekend": layer_mdw,
    "Puerto Rican Day": layer_pr,
    "Fourth of July Weekend": layer_ind,
    "Labor Day Weekend": layer_ldw,
    "Halloween Weekend": layer_halloween
};

L.control.layers(overlays, baseLayers, {collapsed: false}).addTo(map);
