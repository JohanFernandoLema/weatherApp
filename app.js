// console.log(fetch(url))
const btn = document.querySelector('.weatherBtn')
const cityName = document.querySelector('.city')
const some = document.querySelector('.something')

// const url =

btn.addEventListener('click', () => {
  fetch(
    'http://api.openweathermap.org/data/2.5/forecast?q=' +
      cityName.value +
      '&appid=15123b3ed925926863dab6d6946847bb'
  )
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
})
