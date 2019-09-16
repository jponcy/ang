import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BarbecueApiService } from 'src/app/barbecue-api.service';
import { Barbecue } from './../barbecue';

@Component({
  selector: 'app-bbq-details',
  templateUrl: './bbq-details.component.html',
  styleUrls: ['./bbq-details.component.scss']
})
export class BbqDetailsComponent implements OnInit {

  barbecue$: Observable<Barbecue>;

  constructor(private api: BarbecueApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
        .params
        .subscribe(param => {
          if (param.id) {
            /// TODO: Should manage 404 (intereptor).
            this.barbecue$ = this.api.getOne(param.id);
          }
        });
  }
}
