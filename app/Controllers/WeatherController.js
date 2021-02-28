import { ProxyState } from "../AppState.js";
import {weatherService} from"../Services/WeatherService.js"

 function _draw() {
   
   document.getElementById("weather").innerHTML = ProxyState.weather.Template
  
  }

export default class weatherController{

  constructor() {
      ProxyState.on("weather", _draw)
      weatherService.getWeather()
  }


    // getWeather(){
    //   try{
    //     weatherService.getWeather()
    //   }catch(error){
    //     console.error(error)
    //   }
    // }


}