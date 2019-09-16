import { Barbecue } from './../barbecue';
import { Component, OnInit } from '@angular/core';
import { BarbecueApiService } from 'src/app/barbecue-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bbq-details',
  templateUrl: './bbq-details.component.html',
  styleUrls: ['./bbq-details.component.scss']
})
export class BbqDetailsComponent implements OnInit {

  barbecue$: Observable<Barbecue>;

  constructor(private api: BarbecueApiService) { }

  ngOnInit() {
    this.barbecue$ = this.api.getOne();
  }
}
