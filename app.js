// console.log(fetch(url))

const city = document.querySelector('.cityInput')
const searchCity = document.querySelector('.weatherBtn')

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
      document.querySelector('.temp').innerHTML = data.list[0].main.temp
      document.querySelector('.wind').innerHTML = data.list[0].wind.speed
    })
    .catch((err) => console.log(err))
}

searchCity.addEventListener('click', () => {
  getWeather()
})
