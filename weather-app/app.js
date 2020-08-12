const request = require('request')
const geoCode = require('./utils/geoCodejs')
const weatherReport = require('./utils/weatherReport')

const address = process.argv[2]

if(!address){
  console.log("please enter the address")
}

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
