export default class Weather{
    constructor(data) {
       this.id = data.id
       this.weather = data.weather.icon
       this.temperature = data.main.temp
       this.area = data.sys.country
       
       
    }

    get Template() {

        return /*html*/`
        <footer class="" id="weather">
        <div class="row text-center">
            <div class="text-center">
                <p class="pl-3 text-light">${this.area} ${this.temperature}</p>
            </div>
        </div>
    </footer>
        `
    }

}