'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


// Using the Geolocation API

if(navigator.geolocation){
//inside function (successCallback,errorCallback)
    navigator.geolocation.getCurrentPosition(
        function(position){
            const {latitude}=position.coords; //destructuring - create variable latitude
            const {longitude}=position.coords;
            // console.log(latitude,longitude);
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);



            const coords=[latitude,longitude];
            
            //Here we create a map in the 'map' div, add tiles of our choice, and then add a marker with some text in a popup  src(leaflet)
            //L is namespace for couple of method
            const map = L.map('map').setView(coords, 13);//zoom level of map by deafult


            //theme
            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker(coords).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
        },
        function(){
            alert('Could not get your location');
        });
}