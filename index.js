'use strict';

var readOut = document.getElementById('speed');

function geo_success(position) {
    alert(position.coords.speed)
    // readOut.innerHTML = position.coords.speed
    
}
  
function geo_error() {
    alert("Sorry, no position available.");
}

var geo_options = {enableHighAccuracy: true};

function getLocation() {
    if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(showPosition);
        navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
    } else {
        readOut.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// if ("geolocation" in navigator) {
//     /* geolocation is available */

//     /* assign an ID number that can be used to uniquely identify the
//     requested position watcher */
//     var watchPositionID = navigator.geolocation.watchPosition(
//         geo_success, geo_error, geo_options);

//     /* stop watching user's location */
//     // navigator.geolocation.clearWatch(watchID);
// } else {
//     /* geolocation IS NOT available */
// }