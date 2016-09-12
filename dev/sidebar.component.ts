import {Component} from "angular2/core";
import {Profile} from "./profile";
import {ProfileService} from "./profile.service";
import {WeatherService} from "./weather/weather.service";


@Component({
  selector: 'my-sidebar',
  template: `
      <h3>Saved Profiles </h3>
      <button (click)="onSaveNew()">Save List to Profile</button>
      <article class="profile">
           <h4>Profile Name</h4>
           <p>Cities: New York, London</p>
           <span class="delete" (click)="onDeleteProfile($event)">X</span>
         </article>

  `,
  styleUrls:['src/css/sidebar.css'],
  providers: [ProfileService]
})

export class SidebarComponent {
    profiles: Profile[];

    constructor (private _profileService: ProfileService, private _weatherService: WeatherService){}
}
