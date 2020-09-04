// Creating map object
var myMap = L.map("map", {
    center: [40.7, -94.5],
    zoom: 3
  });

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Read the geoJson file
d3.json("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson").then(function(data) {
  console.log(data["features"]);
});