import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Barbecue } from './bbq/barbecue';
import { Observable, of } from 'rxjs';
import { User } from './bbq/user';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + 'bbq';

@Injectable({
  providedIn: 'root'
})
export class BarbecueApiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Barbecue[]> {
    return this.http.get<Barbecue[]>(API_URL);
  }

  getOne(id: number): Observable<Barbecue> {
    return this.http.get<Barbecue>(`${API_URL}/${id}`);
  }
}
