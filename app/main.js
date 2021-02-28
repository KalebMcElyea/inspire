import ImageController from "./Controllers/ImageController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TodoController from "./Controllers/TodosController.js";
import weatherController from "./Controllers/WeatherController.js";


class App {
  imageController = new ImageController();
  
  todoController = new TodoController();

 quotesController = new QuotesController();

 weatherController = new weatherController();
}

window["app"] = new App();
