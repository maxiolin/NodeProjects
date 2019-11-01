const path = require('path');

const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geoCode.js');
const forecast = require('./utils/forecast.js');

const app = express()
// Defined paths for Expressconfig
const partialsPath = path.join(__dirname, '../templates/partials');
const viewsPath = path.join(__dirname, '../templates/views');
const publicDirectoryPath = path.join(__dirname, '../public');

console.log(viewsPath);

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Marco Ramos'
    });
});

// app.get('', (req, res) => {
//     //res.sendFile(path.join(__dirname,'../public/NumberRestriction.html'));
//     res.send('<h1>weather</h1>')
// });

app.get('/help', (req, res) => {
  res.render('help',{
      title: 'Help Page',
      example: "Hello this is the help you can search for FAQ!",
      name: 'Marco Ramos'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About weather',
        content: "This is my first template"
    });
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        res.send({
            error: 'You must provide a search term'
        })
    }
    else {
        console.log(req.query.search)
        res.send({
            products: []
        })
    }
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
       return res.send({
            error: 'You must provide and adress'
        })
    }
    
    geocode(req.query.address , (error, {latitude, longitude, location} = {}) => {
        if (error)
            return res.send({
                error
            })
            
            
            forecast(latitude, longitude, (error, data) => {
            if (error)
                return res.send({
                    error
                })
            
                
                
                res.send({
                    forecast: data,
                    location: location 
                })
            });
    
    })

    
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Marco Ramos',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req,res) => {
  res.render('404', {
      title: '404',
      name: 'Marco Ramos',
      errorMessage: 'Page not found'
  })
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})