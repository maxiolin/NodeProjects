const geocode = require('./utils/geoCode.js');
const forecast = require('./utils/forecast.js');
const yargs = require('yargs');

yargs.version('1.1.0');

//Create add command
yargs.command({
  command: 'Forecast',
  describe: 'print the forecast for a given location',
  builder: {
    location: {
      describe: 'location name',
      demandOption: true,
      type: 'string'
     } 
  },
  handler(argv){
    var {location} = argv;
    geocode(location, (error, coordenates) => {
      if (error)
        return console.log(error);
        
         
        forecast(coordenates, (error, data) => {
          if (error)
            return console.log(error);
          
             var {Location} = coordenates;
            console.log(Location + " forecast:");
            console.log(data);
        });
      
    })
  } 
});

//console.log(yargs.argv);
yargs.parse();



 

