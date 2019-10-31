const request = require('request');

const forecast = (coordenates, callback) => {
    var {Longitude, Latitude} = coordenates;  
    const url = 'https://api.darksky.net/forecast/61c4635aa46827ee1ca98a16a33173c1/'+ Longitude + ',' + Latitude + '?units=si'
    //console.log(url)
    request({url, json: true}, (error, {body, error:resError}) => {
      
      const {summary} = body.daily.data[0];
      const {temperature, precipProbability} = body.currently;
      if (error) {
        callback('Unable to connect to weather service!', undefined);
      } else if(resError){
        callback(resError, undefined);
      } else {
        callback(undefined, summary + " It is currently " + temperature + " degrees out. There is a " + precipProbability*100 + "% chance of rain" );
      }
      
    })
}

module.exports = forecast;