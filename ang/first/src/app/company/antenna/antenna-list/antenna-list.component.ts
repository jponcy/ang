import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-antenna-list',
  templateUrl: './antenna-list.component.html',
  styleUrls: ['./antenna-list.component.css']
})
export class AntennaListComponent implements OnInit {

  @Input()
  antennas: any[];

  @Input()
  companyName: string;

  constructor() { }

  ngOnInit() {
  }

}
