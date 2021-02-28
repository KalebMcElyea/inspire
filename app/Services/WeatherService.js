import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js";

class myWeatherService{
constructor(){
  this.getWeather()
}

async getWeather(){
  try {
    let res = await sandboxApi.get('weather')
    ProxyState.weather = new Weather(res.data)
  } 
  catch (error) {
    console.error(error)
    
  }
}
   
}
export const weatherService = new myWeatherService()