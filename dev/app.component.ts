import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <h1>geoGramJS</h1>
        </header>
        <my-sidebar></my-sidebar>
      <my-weather-search></my-weather-search>
        <weather-list></weather-list>
    `,
})
export class AppComponent {
}
