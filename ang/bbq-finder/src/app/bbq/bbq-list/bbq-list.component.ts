import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Barbecue } from '../barbecue';
import { BarbecueApiService } from 'src/app/barbecue-api.service';

@Component({
  selector: 'app-bbq-list',
  templateUrl: './bbq-list.component.html',
  styleUrls: ['./bbq-list.component.scss']
})
export class BbqListComponent implements OnInit {

  barbecues$: Observable<Barbecue[]>;
  barbecues: Barbecue[];

  constructor(private api: BarbecueApiService) { }

  ngOnInit() {
    // Si on a choisi l'observable
    this.barbecues$ = this.api.getAll();

    // Si on a choisi les données
    this.api
        .getAll()
        .subscribe(d => this.barbecues = d, console.error);

    // C'est l'un OU l'autre, pas les deux !

    // A la rigeur, si vraiment on veut les deux, on peut faire ça :
    // this.barbecues$ = this.api
    //     .getAll()
    //     .pipe(tap(d => this.barbecues = d));
    // Ici au moins, une seule requête à l'API.
  }
}
