import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  company: any;

  constructor() { }

  ngOnInit() {
    // FIXME: Devrait-etre recuperees a partir d'un service (potentiellement api).
    this.company = {
      id: 321,
      name: 'Apside',
      antennas: [{
        id: 3214,
        city: 'Rennes'
      }, {
        id: 432,
        city: 'Nates'
      }]
    };
  }

}
