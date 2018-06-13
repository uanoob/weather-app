// Init Weather object
const weather = new Weather('Boston', 'us');

// Init UI object
const ui = new UI();

// Get weather on DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

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
