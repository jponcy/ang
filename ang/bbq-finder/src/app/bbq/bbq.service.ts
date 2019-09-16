import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Barbecue } from './barbecue';

const URL = 'http://localhost:3000/bbq';

@Injectable({
  providedIn: 'root'
})
export class BbqService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Barbecue[]>(URL);
  }
}
