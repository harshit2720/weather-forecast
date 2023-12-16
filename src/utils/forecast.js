const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude +"&lon=" + longitude + "&appid=9367d5260ff9ade86fce38481ff80651&units=metric"
    request({url, json : true}, (error, {body}) => {
        if (error){ 
            callback('Unable to connect to internet',undefined)
        
        }
        else if(body.message){
            callback('Unable to find location!',undefined)
            
        }
        else{
            callback(undefined,body.weather[0].description + ". It is currently " + body.main.temp + 
            " degrees out there. With pressure " + body.main.pressure + " hpa. Humidity : " + body.main.humidity + "%")
    
        }
    })
    
}
module.exports = forecast
