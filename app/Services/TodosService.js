import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";


class myTodoService{
constructor(){
  this.getTodo()
}

async getTodo(){
  try{
    let res = await sandboxApi.get('kaleb/todos')
    ProxyState.todo = res.data.map(newTodo => new Todo(newTodo))
  }catch(error){
    console.error(error)
  }
}


async createTodo(rawTodo) {
  try {

    let res = await sandboxApi.post('kaleb/todos', rawTodo)
    
    this.getTodo()

  } catch (error) {
    console.error(error)
  }
}



async deleteTodo(id) {
  try {
    const res = await sandboxApi.delete(`kaleb/todos/` + id)
    this.getTodo()
  } catch (error) {
    console.error(error)
    
  }
}

}

export const TodoService = new myTodoService()