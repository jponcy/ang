import { Injectable } from '@angular/core';
import { Barbecue } from './bbq/barbecue';
import { Observable, of } from 'rxjs';
import { User } from './bbq/user';

@Injectable({
  providedIn: 'root'
})
export class BarbecueApiService {

  private data: Barbecue[];
  private users: User[];

  constructor() {
    let id = 0;

    this.users = [{
      id: ++id,
      username: 'Totti',
      address: '25 impasse de bela'
    }, {
      id: ++id,
      username: 'Sam',
      address: '10 rue du Tamtam'
    }, {
      id: ++id,
      username: 'Henry',
      address: '2 avenue roger'
    }];

    id = 412;

    this.data = [{
      id: ++id,
      label: 'Profitons du soleil',
      address: 'Parc du Thabor',
      price: 2.4,
      startAt: new Date('2019-12-24T03:42:00.000000Z'),
      endAt: null,
      owner: this.users[0],
      users: this.users
    }, {
      id: ++id,
      label: 'Winter is comming',
      address: 'Antartic',
      price: 52.3,
      startAt: new Date('2020-08-26T03:42:00'),
      endAt: new Date('2020-08-26T03:42:05'),
      owner: this.users[1],
      users: [this.users[0], this.users[2]]
    }, {
      id: ++id,
      label: 'C\'est Thomas qui régal',
      address: 'Chez Thomas',
      price: null,
      startAt: new Date(),
      endAt: null,
      owner: this.users[2],
      users: this.users
    }];
  }

  getAll(): Observable<Barbecue[]> {
    return of(this.data);
  }

  getOne(): Observable<Barbecue> {
    return of(this.data[0]);
  }
}
