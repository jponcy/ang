import { Component, OnInit } from '@angular/core';
import { Faker } from './faker';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
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

  products = [];

  ngOnInit(): void {
    const faker = new Faker();
    const observable = faker.observable();

    observable.subscribe(values => this.products = values);
  }

}
