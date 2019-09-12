import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private current = new BehaviorSubject<User>(null);
  private users: User[];
  private lastInd = -1;

  constructor() {
    // Code de test pour faire changer l'utilisateur.
    this.users = [{
      id: 1,
      username: 'Toto',
      admin: false
    }, {
      id: 2,
      username: 'Admin',
      admin: true
    }];

    setInterval(() => {
      this.lastInd = (this.lastInd + 1) % this.users.length;
      this.current.next(this.users[this.lastInd]);
    }, 2000);
  }

  get(): Observable<User> {
    return this.current;
  }
}
