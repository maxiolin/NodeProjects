const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    
    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        
            if (data.error) {
                messageOne.textContent = "Oops! unable to find location"
            } else {
                messageOne.textContent = "Forecast: " + data.forecast
                messageTwo.textContent = "Location: " + data.location
            }
        })
    });
})



