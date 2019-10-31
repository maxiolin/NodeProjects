const https = require('https');

const url = 'https://api.darksky.net/forecast/61c4635aa46827ee1ca98a16a33173c1/40,-75?units=si'

const request  = https.request(url, (response) => {
  let data = ''; 
    
  response.on('data', (chunk) => {
    data += chunk.toString();
    //console.log(chunk);
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()