export default class Todo{
    constructor(data) {
        this.id=data.id
        this.completed = data.completed
        this.description = data.description
        this.user = data.user
       
    }

    get Template() {

        return /*html*/`

        <div class="col-4 text-center card" id="todo">
        <h5 class="col-10">
       <li>${this.description}</li>
        <button type="button" class="text-danger close col-2"
                onclick="app.todoController.deleteTodo('${this.id}')"><span>&times;</span></button> </li>
                <input type="checkbox" name="checkboxes" id="myCheck" ('${this.id}') class="m-2">
                
        
            
        </div>
        `
    }

}
