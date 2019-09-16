import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../bbq/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + 'user/';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(API_URL);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(API_URL, user);
  }

  delete(id: string|number) {
    return this.http.delete(`${API_URL}${+id}`);
  }
}
