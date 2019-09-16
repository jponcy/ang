import { Component, OnInit } from '@angular/core';
import { BbqService } from '../bbq.service';
import { Observable } from 'rxjs';
import { Barbecue } from '../barbecue';

@Component({
  selector: 'app-bbq-list',
  templateUrl: './bbq-list.component.html',
  styleUrls: ['./bbq-list.component.scss']
})
export class BbqListComponent implements OnInit {

  data$: Observable<Barbecue[]>;

  constructor(private readonly api: BbqService) { }

  ngOnInit() {

    this.data$ = this.api.getAll();
  }

}
