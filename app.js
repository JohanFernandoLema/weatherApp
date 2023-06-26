let city = 'Toronto'
const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=15123b3ed925926863dab6d6946847bb`
// console.log(fetch(url))

fetch(url)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
