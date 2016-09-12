import {Component} from "angular2/core";
@Component({
  selector: 'my-sidebar',
  template: `
      <h3>Saved Profiles </h3>
      <button (click)="onSaveNew()">Save List to Profile</button>
      <article>
           <h4>Profile Name</h4>
           <p>Cities: New York, London</p>
           <span class="delete" (click)="onDeleteProfile($event)">X</span>
         </article>

  `
})

export class SidebarComponent {

}
