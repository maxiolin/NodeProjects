const request = require('request');



const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWF4aW9saW4iLCJhIjoiY2p2b2NlY3M3MXFwZTQ5cGJvbmxhYnFrMSJ9._QbXBMsuGl8Qeu4nZW6ozA&limit=1'

    request({url, json: true}, (error, {body}) => {
        
        const {message} = body;
        const {center, place_name} = body.features[0];
        if (error) {
            callback(error, undefined);
        } else if (message || !body.features[0]) {
            callback('Error: ' + message + ', No features avaliable', undefined);
        } else {
            callback(undefined,{
              Latitude: center[0] , 
              Longitude: center[1],
              Location: place_name
            });
        }
      })
}


module.exports = geocode;