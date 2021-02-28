export default class Quotes{
    constructor(data) {
        this.id = data.id,
        this.content = data.content,
        this.author = data.author
       
    }

    get Template() {

        return /*html*/`
        <footer class="" id="quote">
        <div class="row text-center">
            <div class="text-center">
                <p class="pl-3">${this.content}</p>
                <p class="pl-3">${this.author}</p>
            </div>
        </div>
    </footer>
        `
    }

}