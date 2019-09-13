import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  template: `<div><p>Chargement...</p></div>`,
  styleUrls: ['./loading.component.scss']
  // styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  constructor() { }

}
