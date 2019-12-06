
  // Mapbox.org
  mapboxgl.accessToken = 'pk.eyJ1Ijoib3dzaWJvd3NpIiwiYSI6ImNrMjAyOWNqZTAxcm0zbWt4OWRyenlrZnMifQ.4oELFt2O23X8x8A9qGe7iA';

var opendock = [9.887929,55.270334];
var oberst2 = [12.6188,55.6977];
var oberst3 = [12.612,55.6947];
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/owsibowsi/ck3srgqhy0aqe1cqsdlcekcxm',
center: [9.8885,55.2692],
zoom: 17.2,
bearing: 270
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 25 })
.setText('covered dock');

var popup2 = new mapboxgl.Popup({ offset: 25 })
.setText('Hop');

var popup3 = new mapboxgl.Popup({ offset: 25 })
.setText('Svømning');

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

var el2 = document.createElement('div');
el2.id = 'marker2';

var el3 = document.createElement('div');
el3.id = 'marker3';
// create the marker
new mapboxgl.Marker(el)
.setLngLat(opendock)
.setPopup(popup) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el2)
.setLngLat(oberst2)
.setPopup(popup2) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el3)
.setLngLat(oberst3)
.setPopup(popup3) // sets a popup on this marker
.addTo(map);
