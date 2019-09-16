import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/bbq/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  data$: Observable<User[]>;

  constructor(private api: UserApiService) { }

  ngOnInit() {
    this.data$ = this.api.getAll();
  }

}
