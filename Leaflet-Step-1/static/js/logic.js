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
d3.json("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson", function(data, error) {
  console.log(data);

  if (error) {
    throw error;
  };
});

// Color based on magnitude
function magnitudeColor(magnitude) {
  switch (true) {
  case magnitude > 6.5:
    return "yellow";
  case magnitude > 6:
    return "red";
  case magnitde > 3.5:
    return "orange";
  default:
    return "white";
  }
}



// Creating radius
function radiusFinder(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 5;
}

// Adding GeoJSON
L.geoJson(data, )

// Pop-ups and Markers

// Update the legend's innerHTML with the last updated time and station count
function updateLegend(time, stationCount) {
  document.querySelector(".legend").innerHTML = [
    "<p>Updated: " + moment.unix(time).format("h:mm:ss A") + "</p>",
    "<p class='out-of-order'>Out of Order Stations: " + stationCount.OUT_OF_ORDER + "</p>",
    "<p class='coming-soon'>Stations Coming Soon: " + stationCount.COMING_SOON + "</p>",
    "<p class='empty'>Empty Stations: " + stationCount.EMPTY + "</p>",
    "<p class='low'>Low Stations: " + stationCount.LOW + "</p>",
    "<p class='healthy'>Healthy Stations: " + stationCount.NORMAL + "</p>"
  ].join("");
}