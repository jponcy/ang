import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

function fakeObs(): Observable<string[]> {
  const result = new Subject<string[]>();

  return result;
}

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  data = [{
    id: 1,
    name: 'Machine à café',
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

  ngOnInit(): void {
    // const productss
  }

}
