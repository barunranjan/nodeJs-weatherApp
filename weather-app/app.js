const request = require('request')
const geoCode = require('./utils/geoCode.js')
const weatherReport = require('./utils/weatherReport')

const address = process.argv[2]

if(!address){
  console.log("please enter the address")
}else{

  geoCode(address, (error, data)=>{
     if(error){
       return console.log(error)
     }
     console.log(data.location)
      weatherReport(data.latitude, data.longitude, (error, forecastdata)=>{
        if(error){
          return console.log(error)
        }
  
        
        console.log(data.forecastdata)
  
      })
  })
}

