import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quotes.js";
import { sandboxApi } from "./AxiosService.js";

class myQuotesService{
constructor(){
  this.getQuote()
}

async getQuote(){
  try {
    let res = await sandboxApi.get('quotes')
    ProxyState.quote = new Quote(res.data)
  } 
  catch (error) {
    console.error(error)
    
  }
}
   
}
export const quotesService = new myQuotesService()