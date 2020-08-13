const request = require('request')



const geoCode = (address, callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidnJucmFuamFuIiwiYSI6ImNrZG90ZWxoYzBqa2MycXFvcmVwbmN0N3kifQ.TdmF_bcJceq13CzsLchT-w&limit=1`
  
    request({url,json:true},(error,response)=>{
      if(error){
     callback('Unable to connect', undefined)
    }else if(response.body.features.length === 0){
      callback('unable to find',undefined)
    }else{
      callback(undefined,{
        latitude:response.body.features[0].center[1],
        longitude:response.body.features[0].center[0], 
        location:response.body.features[0].place_name
      })
    }
  })
  }



  module.exports = geoCode