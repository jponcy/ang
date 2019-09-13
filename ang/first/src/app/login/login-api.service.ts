import { CurrentUserService } from './../auth/current-user.service';
import { User } from './../auth/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  private users: User[];

  constructor(private currentUser: CurrentUserService) {
    // Code de test pour faire changer l'utilisateur.
    this.users = [{
      id: 1,
      username: 'Toto',
      password: 'aze',
      admin: false
    }, {
      id: 2,
      username: 'Admin',
      password: 'admin',
      admin: true
    }];
  }

  login(login: string, password: string): Observable<User> {
    const user = this.users.find(u => u.username === login && u.password === password) || null;

    return of(user)
      .pipe(tap(v => {
        if (v && v.id) {
          this.currentUser.set(v);
        }
      }));
  }
}
