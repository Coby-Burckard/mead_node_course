console.log('client side js loaded')

const fetchWeather = async (location) => {
  const response = await fetch(`/weather?address=${ location }`)
  const data = await response.json()
  if (data.error) {
    console.log(data.error)
  }
  console.log(data)
}

window.onload = () => {
  const weatherForm = document.querySelector('form')
  const search = document.querySelector('input')
  weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    fetchWeather(search.value)
  })
}