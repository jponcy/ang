import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../bbq/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor() { }

  getAll(): Observable<User[]> {
    return of([]);
  }

  create(user: User): Observable<User> {
    user.id = -42;

    return of(user);
  }
}
