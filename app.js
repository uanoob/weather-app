// Init Weather object
const weather = new Weather('Boston', 'us');

// Get weather on DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
}
