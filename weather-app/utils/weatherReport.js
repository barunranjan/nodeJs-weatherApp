const request = require('request')


const weatherReport = (a,b, callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=fff6d2397a31f893485d96d31110ff49&query=${a},${b}`
    request({url,json:true},(err, res)=>{
      try {
        callback("Its currently "+res.body.current.temperature+" degree out. There is a "+res.body.current.precip+"% chance of rain")
      } catch (err) {
        callback('Something went wrong')
      }
    }
    )}

module.exports = weatherReport