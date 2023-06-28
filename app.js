// console.log(fetch(url))

const city = document.querySelector('.cityInput')
const searchCity = document.querySelector('.weatherBtn')
const weatherIcon = document.querySelector('.weather-icon')

// const url
async function getWeather() {
  await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=15123b3ed925926863dab6d6946847bb`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      // Get weather info
      document.querySelector('.city').innerHTML = data.city.name
      document.querySelector('.temp').innerHTML =
        '<h6 class="properties">Temperature</h6>' +
        Math.floor(data.list[0].main.temp) +
        ' °F'
      document.querySelector('.wind').innerHTML =
        '<h6 class="properties">Wind Speed</h6>' +
        '<i class="fa-solid fa-wind"></i> ' +
        data.list[0].wind.speed +
        ' Km/h'
      document.querySelector('.humidity').innerHTML =
        '<h6 class="properties">Humidity</h6>' +
        data.list[0].main.humidity +
        ' %'

      if (data.list[0].weather[0].main == 'Clouds') {
        weatherIcon.src = './Assets/images/clouds.png'
      } else if (data.list[0].weather[0].main == 'Clear') {
        weatherIcon.src = './Assets/images/clear.png'
      } else if (data.list[0].weather[0].main == 'clouds') {
        weatherIcon.src = './Assets/images/clouds.png'
      } else if (data.list[0].weather[0].main == 'Rain') {
        weatherIcon.src = './Assets/images/rain.png'
      } else if (data.list[0].weather[0].main == 'Drizzle') {
        weatherIcon.src = './Assets/images/drizzle.png'
      } else if (data.list[0].weather[0].main == 'Mist') {
        weatherIcon.src = './Assets/images/mist.png'
      }
    })
    .catch((err) => console.log(err))
}

searchCity.addEventListener('click', () => {
  getWeather()
})
