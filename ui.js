class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.visibility = document.getElementById('w-visibility');
    this.wind = document.getElementById('w-wind');
  }

  paint(data) {
    this.location.textContent = data.name;
    this.desc.textContent = data.weather[0].description;
    this.string.textContent = `${(9 / 5) *
      (parseInt(data.main.temp, 10) - 273) +
      32} F / ${(parseInt(data.main.temp, 10) - 273.15).toFixed(1)} °C`;
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${data.main.humidity} %`;
    this.pressure.textContent = `Atmosphere Pressure: ${
      data.main.pressure
    } mbar`;
    this.visibility.textContent = `Visibility: ${data.visibility} meters`;
    this.wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
  }
}
