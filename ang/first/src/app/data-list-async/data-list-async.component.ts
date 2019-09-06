import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FakerService } from '../faker.service';

@Component({
  selector: 'app-data-list-async',
  templateUrl: './data-list-async.component.html',
  styleUrls: ['./data-list-async.component.css']
})
export class DataListAsyncComponent implements OnInit {
  data = [{
    id: 1,
    name: 'Machine à café',
    lastUpdate: new Date(),
    dependencies: [{
      id: 42,
      label: 'Récolteur'
    }, {
      id: 532,
      label: 'Percolateur'
    }]
  }, {
    id: 2,
    name: 'Robinet',
    dependencies: []
  }];

  constructor(private service: FakerService) {}

  products$: Observable<string[]>;

  ngOnInit(): void {
    const observable = this.service.getProducts();

    this.products$ = observable;
  }

}
