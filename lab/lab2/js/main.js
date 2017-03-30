// Leaflet map setup
var map = L.map('map', {
  center: [41.882592, -87.637263],
  zoom: 12
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// To add your Carto visualization, change cartoUserName and cartoVizId to your username and
// project ID. These values can be found in the URL of your map on Carto:
// - https://[cartoUserName].carto.com/[cartoVizId]

// Unfortunately, only some visualizations styles are available in this method:
//
// - None
// - Animated
// - Pixel
//
// This is a bummer. But don't worry, we'll learn about how to do more powerful visualizations
// with Carto next week when we learn about SQL

// To add visualizations created with the Analysis feature, you will need to export the data to a
// GeoJSON. From there, you can either import the GeoJSON to Carto or use Leaflet's L.geoJson.

var cartoUserName = 'chloequ';
var cartoVizId = '417ce958-110b-11e7-87f9-0e233c30368f';

var layerUrl = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId+'/viz.json';

cartodb.createLayer(map, layerUrl)
  .on('done', function(layer) {
    layer.addTo(map);
  }).on('error', function(err) {
    console.log(err);
  });

  var myStyle = function(feature) {
    switch(feature.properties.cluster_no){
      case 0: return {
       radius: 8,
       color: '#42ebf4',
       weight: 2,
       fillOpacity: 0,
       opacity: 0.3
     };
     case 1: return {
       radius: 8,
       color: '#41aff4',
       weight: 2,
       fillOpacity: 0,
       opacity: 0.3
     };
     case 2: return {
       radius: 8,
       color: '#7941f4',
       weight: 2,
       fillOpacity: 0,
       opacity: 0.3
     };
     case 3: return {
       radius: 8,
       color: '#a341f4',
       weight: 2,
       fillOpacity: 0,
       opacity: 0.3
     };
     default: return {
       radius: 8,
       color: '#e241f4',
       weight: 2,
       fillOpacity: 0,
       opacity: 0.3
     };
   }
 };

  var myAnalysis = $.ajax("https://raw.githubusercontent.com/chloequ/myData/master/green_roofs_map%20(1).geojson");
  myAnalysis.done(function(data){
    var myData = JSON.parse(data);
    console.log(myData);
    var myLayer = L.geoJson(myData, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, myStyle(feature));
      }
    });
    myLayer.addTo(map);
    // map.removeLayer(myLayer);
  });
