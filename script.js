
const urlApi = `https://api.openweathermap.org/data/2.5/weather`;
const apiKey = `API-KEY`;
const diffKelvin = 273.15;

document.getElementById('searchButton').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  if (city) {
    fetchWeather(city);
  } else {
    alert('Ingrese una ciudad vàlida');
  }
})

function fetchWeather (city) {
  fetch(`${urlApi}?q=${city}&appid=${apiKey}&lang=es`)
  .then(data => data.json())
  .then(data => showWeatherData(data));
}

function showWeatherData (data) {
  const divResponseData = document.getElementById('responseData');
  divResponseData.innerHTML = '';

  const cityName = data.name;
  const countryName = data.sys.country;
  const temp = data.main.temp;
  const hummidity = data.main.humidity;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  const cityInfo = document.createElement('h2');
  cityInfo.textContent = `${cityName} - ${countryName}`;

  const tempInfo = document.createElement('p');
  tempInfo.textContent = `La temperatura es: ${ Math.round(temp - diffKelvin)}ºC`;

  const humidityInfo = document.createElement('p');
  humidityInfo.textContent = `La humedad es: ${hummidity}`;

  const icoInfo = document.createElement('img');
  icoInfo.src = ` https://openweathermap.org/img/wn/${icon}@2x.png`; // Ver como se consume la img

  const descriptionInfo = document.createElement('p');
  descriptionInfo.textContent = `Descripción meteorológica: ${description}`;

  divResponseData.appendChild(cityInfo);
  divResponseData.appendChild(tempInfo);
  divResponseData.appendChild(humidityInfo);
  divResponseData.appendChild(icoInfo);
  divResponseData.appendChild(descriptionInfo);

}