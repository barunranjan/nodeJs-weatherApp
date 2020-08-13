const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geoCode.js')
const weatherReport = require('./utils/weatherReport.js')

const app = express()


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Varun'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Varun'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Varun'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:"No address was provided"
        })
        
    }
    geoCode(req.query.address, (error, {latitude, location, longitude}={})=>{
        if(error){
          return res.send({
              error:'Address Not found'
          })
        }
         weatherReport(latitude, longitude, (error, forecastdata)=>{
           if(error){
             return res.send({
                error
            })
           }
           res.send({
               locations:location,
               forecast:forecastdata,
               address:req.query.address
           })
     
         })
     })
    // res.send({
    //     forecast: 'It is sunny',
    //     location: 'Muzaffarpur',
    //     address:req.query.address
    // })
})

app.get('/product',(req, res)=>{
    if(!req.query.search){
        return res.send({
            error:'No search data was provided'
        })
    }
    res.send({
        product:[]
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Varun',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Varun',
        errorMessage: 'Page not found.'
    })
})

app.listen(5000, () => {
    console.log('Server is up on port 5000.')
})