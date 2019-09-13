import { CurrentUserService } from './../auth/current-user.service';
import { User } from './../auth/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private currentUser: CurrentUserService) { }

  login(login: string, password: string): Observable<User> {

    let res: User;

    if (login === 'admin' && password === 'admin') {
      res = {
        id: 321,
        username: 'admin',
        admin: true
      };
    } else {
      res = null;
    }

    return of(res)
      .pipe(tap(v => {
        if (v && v.id) {
          this.currentUser.set(v);
        }
      }));
  }
}
