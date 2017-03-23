// This .js file will use location WEB API
// after you call the api, you can get the location data
// based on latitude and longgitude
// time: 2017.03.15
// author: from <HTML5 HEAD FIRST>

window.onload = getMyLocation; // call function when page load finishes


var map; // This will hold the google Map after we creat it.

function showMap(coords) {
   var googleLatAndLong = 
	// we use latitude and longitude to create google.maps.LatLng object
	new google.maps.LatLng(coords.latitude,coords.longitude);

// call the Geolocation API if navigator.geolocation exist
function getMyLocation(){ 
     if (navigator.geolocation) {
	// call the getCurrentPosition method to get data
	// if this method work, the browser will implement it.
	// but you need a handler displayLocation which change page HTML
	 navigator.geolocation.getCurrentPosition(displayLocation);
     } else {
	 alert("Oops, no geolocation support");
     }
}

// Our location handler, which is going to get called when the browser has 
// a location

function displayLocation(position) {
	// grab the latitude and longitude from position.coords object 
	// which exists in the browser if your broswer support
   var latitude = position.coords.latitude; 
   var longitude = position.coords.longitude; 

	// change the content of HTML code so the content of page changed
   var div = document.getElementById("location");
   div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
   // show the maps provided by google
   showMaps(position.coords);
}




   
