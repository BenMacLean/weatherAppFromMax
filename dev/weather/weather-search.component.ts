import {Component} from "angular2/core"

@Component({
    selector: 'my-weather-search',
    template: `
    <section class="weather-search">
        <form>
            <label for="city">City</label>
            <input type="text" id="city" required>
            <button type="submit">Add City</button>
        </form>
        <div>
            <span class="info"> City found:</span> City name
        </div>
    </section>
  `
})
export class WeatherSearchComponent {

}
