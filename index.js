'use strict';

const options = {
    enableHighAccuracy: true,
    maximumAge: 60000,
    timeout: 27000
};

var appOptions = {}
var readout = document.querySelector('#readout');
var readoutUnits = document.querySelector('#readoutUnits');
var readoutDistance = document.querySelector('#readoutDistance')
var startButton = document.querySelector('#start');
var distance;
var maxSpeed;
var averageSpeed;

function parsePosition(position) {
    var speed = position.coords.speed * 2.236936;
    readout.innerHTML = parseFloat(speed).toFixed(0);
}

// function getLocation() {
//     if (navigator.geolocation) {
//         /* assign watch position ID */
//         appOptions.watchID = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
//     } else {
//         readout.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

const toggleButton = () => {
    startButton.classList.toggle('selected');
}

startButton.addEventListener('click', (event) => {

    if (appOptions.watchID) {
        /* clear user's watch ID */
        navigator.geolocation.clearWatch(appOptions['watchID']);

        appOptions.watchID = null;
        startButton.textContent = 'Start';
        readout.innerHTML = 0
        // startButton.classList.toggle('selected');
    } else {
        appOptions.watchID = navigator.geolocation.watchPosition(parsePosition, null, options);
        console.log('WATCH ID: ' + appOptions.watchID)
        startButton.textContent = 'Stop';
        // startButton.classList.toggle('selected');
    }
}, toggleButton())