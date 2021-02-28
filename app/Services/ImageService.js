import { ProxyState } from "../AppState.js";
import {sandboxApi} from"./AxiosService.js";

class ImageService {

  constructor(){
    this.addImage()
  }
 async addImage() {
   let res = await sandboxApi.get("images")
  ProxyState.image = res.data
  }
}

export const imageService = new ImageService();

