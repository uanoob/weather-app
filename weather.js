class Weather {
  constructor(city, country) {
    this.apiKey = apiKey;
    this.city = city;
    this.country = country;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  // Change weather Location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
