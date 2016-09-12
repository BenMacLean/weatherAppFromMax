import {Component, OnInit} from "angular2/core";
import {Profile} from "./profile";
import {ProfileService} from "./profile.service";
import {WeatherService} from "./weather/weather.service";



@Component({
  selector: 'my-sidebar',
  template: `
      <h3>Saved Profiles </h3>
      <button (click)="onSaveNew()">Save List to Profile</button>
      <article class="profile" *ngFor="let profile of profiles">
           <h4>{{ profile.profileName }}</h4>
           <p>Cities: {{ profile.cities.join(', ') }}</p>
           <span class="delete" (click)="onDeleteProfile($event)">X</span>
         </article>

  `,
  styleUrls:['src/css/sidebar.css'],
  providers: [ProfileService]
})

export class SidebarComponent implements OnInit {
    profiles: Profile[];

    constructor (private _profileService: ProfileService, private _weatherService: WeatherService){}

    ngOnInit(){
      this.profiles = this._profileService.getProfiles();
    }
}
