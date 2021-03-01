import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";


//Private
function _drawImage() {
  // @ts-ignore
  document.body.style.backgroundImage = `url(${ProxyState.image.url})`
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'
}




//Public
export default class ImageController {
  constructor() {
    ProxyState.on("image", _drawImage);
  }

}
