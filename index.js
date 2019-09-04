'use strict';

var readOut = document.getElementById('speed');

function geo_success(position) {
    readOut.innerHTML(position.coords.speed)
}
  
function geo_error() {
    alert("Sorry, no position available.");
}

var geo_options = {
    enableHighAccuracy: true, 
    maximumAge        : 30000, 
    timeout           : 27000
};

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