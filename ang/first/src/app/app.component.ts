import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cssClass = 'uggly';
  logo = 'https://fakeimg.pl/100x100';


  constructor() {
    setInterval(() => this.cssClass = this.cssClass === 'uggly' ? 'worst' : 'uggly', 3000);
  }
}
