
  // Mapbox.org
  mapboxgl.accessToken = 'pk.eyJ1Ijoib3dzaWJvd3NpIiwiYSI6ImNrMjAyOWNqZTAxcm0zbWt4OWRyenlrZnMifQ.4oELFt2O23X8x8A9qGe7iA';
//her tilføjer vi koodinaterne til punkterne
var painter = [9.888989,55.267698];
var engine = [9.889113,55.268186];
var rigger = [9.889095,55.268307];
var electrician = [9.889088,55.268412];
var canteen = [9.889210,55.268643];
var administration = [9.889280,55.268768];
var magasin = [9.889079,55.268997];
var carpenter = [9.888756,55.268763];
var engineering = [9.888679,55.268993];
var carpenter2 = [9.887983,55.269288];
var storage = [9.889853,55.269090];
var carpenter3 = [9.889905,55.269305];
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/owsibowsi/ck3srgqhy0aqe1cqsdlcekcxm',
center: [9.8885,55.2692],
zoom: 17,
bearing: 270
});

// Her bestemmer vi hvilken popup tekst der skal komme ved de forskellige iconer
// sætter offset til 25 så popup kommer lidt over iconet og ikke ovenpå.
var popup = new mapboxgl.Popup({ offset: 25 })
.setText('Painter');

var popup2 = new mapboxgl.Popup({ offset: 25 })
.setText('Engine workshop');

var popup3 = new mapboxgl.Popup({ offset: 25 })
.setText('Rigger');

var popup4 = new mapboxgl.Popup({ offset: 25 })
.setText('Electrician');

var popup5 = new mapboxgl.Popup({ offset: 25 })
.setText('Canteen');

var popup6 = new mapboxgl.Popup({ offset: 25 })
.setText('Adminitration');

var popup7 = new mapboxgl.Popup({ offset: 25 })
.setText('Magasin');

var popup8 = new mapboxgl.Popup({ offset: 25 })
.setText('Captenter Workshop');

var popup9 = new mapboxgl.Popup({ offset: 25 })
.setText('Machine Workshop');

var popup10 = new mapboxgl.Popup({ offset: 25 })
.setText('Carpenter Workshop');

var popup11 = new mapboxgl.Popup({ offset: 25 })
.setText('Storage');

var popup12 = new mapboxgl.Popup({ offset: 25 })
.setText('Carpenter Workshop');


// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

var el2 = document.createElement('div');
el2.id = 'marker2';

var el3 = document.createElement('div');
el3.id = 'marker3';

var el4 = document.createElement('div');
el4.id = 'marker4';

var el5 = document.createElement('div');
el5.id = 'marker5';

var el6 = document.createElement('div');
el6.id = 'marker6';

var el7 = document.createElement('div');
el7.id = 'marker7';

var el8 = document.createElement('div');
el8.id = 'marker8';

var el9 = document.createElement('div');
el9.id = 'marker9';

var el10 = document.createElement('div');
el10.id = 'marker10';

var el11 = document.createElement('div');
el11.id = 'marker11';

var el12 = document.createElement('div');
el12.id = 'marker12';


// create the marker
new mapboxgl.Marker(el)
.setLngLat(painter)
.setPopup(popup) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el2)
.setLngLat(engine)
.setPopup(popup2) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el3)
.setLngLat(rigger)
.setPopup(popup3) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el4)
.setLngLat(electrician)
.setPopup(popup4) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el5)
.setLngLat(canteen)
.setPopup(popup5) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el6)
.setLngLat(administration)
.setPopup(popup6) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el7)
.setLngLat(magasin)
.setPopup(popup7) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el8)
.setLngLat(carpenter)
.setPopup(popup8) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el9)
.setLngLat(engineering)
.setPopup(popup9) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el10)
.setLngLat(carpenter2)
.setPopup(popup10) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el11)
.setLngLat(storage)
.setPopup(popup11) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el12)
.setLngLat(carpenter3)
.setPopup(popup12) // sets a popup on this marker
.addTo(map);

// fjerner zoom on scroll
map.scrollZoom.disable();

//tilføjer zoom og rotation. Da jeg har disablet zoom on scroll funktionen
// kan man sidde fast hvis man kommer til at dobbeltclicke på kortet.
map.addControl(new mapboxgl.NavigationControl());
