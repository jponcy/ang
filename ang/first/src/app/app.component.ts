import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './auth/current-user.service';
import { Observable } from 'rxjs';
import { User } from './auth/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cssClass = 'uggly';
  logo = 'https://fakeimg.pl/100x100';

  user$: Observable<User>;

  constructor(private currentUserService: CurrentUserService) {
    setInterval(() => this.cssClass = this.cssClass === 'uggly' ? 'worst' : 'uggly', 3000);
  }

  ngOnInit() {
    this.user$ = this.currentUserService.get();
  }
}
