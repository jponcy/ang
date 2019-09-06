import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakerService {

  constructor() { }

  test() {
    return 'toto';
  }

  obs() {
    return of(1, 4, 213, 'toto');
  }


  getProducts(): Observable <string[]> {
    const result = new Subject<string[]>();
    const data: string[] = [];

    const inter = setInterval(() => {
      data.push(`Product n°${data.length + 1}`);
      result.next(data);
    }, 2000);

    setTimeout(() => clearInterval(inter), 60000);

    return result;
  }
}
