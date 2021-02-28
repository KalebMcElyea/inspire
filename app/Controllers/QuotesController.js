import { ProxyState } from "../AppState.js";
import {quotesService} from "../Services/QuotesService.js"

 function _draw() {
   
   document.getElementById("quote").innerHTML = ProxyState.quote.Template
  
  }

export default class quotesController{

  constructor() {
      ProxyState.on("quote", _draw)
      quotesService.getQuote()
  }


    getQuote(){
      try{
        quotesService.getQuote()
      }catch(error){
        console.error(error)
      }
    }


}

