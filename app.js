// Init Local Storage
const storage = new Storage();

// Get Storage Location Data
storage.getLocationData();

// Init Weather object
const weather = new Weather(storage.city, storage.country);

// Init UI object
const ui = new UI();

// Get weather on DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change Location
  weather.changeLocation(city, country);

  // Set Location in Local Storage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(data => {
      ui.paint(data);
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
}
