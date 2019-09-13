import { Observable } from 'rxjs';
import { CurrentUserService } from './../../auth/current-user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  modules: string[] = ['candidat', 'entreprise', 'rdv', 'admin panel'];
  currentUser: Observable<User>;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit() {
    this.currentUser = this.currentUserService.get();
  }

  onModuleClick(mod: string) {
    window.alert('On part sur ' + mod);
  }

  // coucou(event: Event) {
  //   console.log('coucou');
  //   console.log(event);
  // }
}
