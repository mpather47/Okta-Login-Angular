import { User } from './../model/user.model';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: RegisterService) {

  }
  user: User = new User();

  register() {

    this.service.createUser(this.user).subscribe(data => console.log(data), error => console.log(error));

  }
  ngOnInit(): void {

  }

}
