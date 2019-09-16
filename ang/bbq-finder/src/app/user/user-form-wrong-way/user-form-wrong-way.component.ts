import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/bbq/user';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-form-wrong-way',
  templateUrl: './user-form-wrong-way.component.html',
  styleUrls: ['./user-form-wrong-way.component.scss']
})
export class UserFormWrongWayComponent implements OnInit {

  private user = new User();

  constructor(private api: UserApiService) { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();

    this.api
        .create(this.user)
        .subscribe(console.log, console.error);
  }

  onInputChange(event) {
    this.user[event.target.name] = event.target.value;
  }
}
