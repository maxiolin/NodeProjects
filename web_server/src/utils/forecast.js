const request = require('request');

const forecast = (Latitude, Longitude, callback) => {
  
    const url = 'https://api.darksky.net/forecast/61c4635aa46827ee1ca98a16a33173c1/'+ Longitude + ',' + Latitude + '?units=si'
    //console.log(url)
    request({url, json: true}, (error, {body, error:resError}) => {
      
      
      if (error) {
        callback('Unable to connect to weather service!', undefined)
      } else if (body.error) {
          callback('Unable to find location', undefined)
      } else {
          callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
      }
        
    })
}

module.exports = forecast;