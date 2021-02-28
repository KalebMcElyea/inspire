import { ProxyState } from "../AppState.js";
import {TodoService} from "../Services/TodosService.js"


 function _draw() {
   let todo = ProxyState.todo
   let template = ''
   todo.forEach(t => template += t.Template)

   document.getElementById("todo").innerHTML = template
}


export default class TodoController{

  constructor() {
      ProxyState.on("todo", _draw)
      TodoService.getTodo()
      _draw()
  }

  createTodo(event){
    event.preventDefault();
    let form = event.target
    console.log(form)
    let rawTodo = {
      description: form.description.value,
    }
    console.log(rawTodo)
    TodoService.createTodo(rawTodo)
    
  }

    

  deleteTodo(id){
    TodoService.deleteTodo(id)
  }
}

