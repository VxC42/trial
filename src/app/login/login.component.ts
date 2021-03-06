import { Component, OnInit } from '@angular/core';
import { ItemService } from './../item.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     user = { name:''};

     person={
          name:"",
          goals:[],
     }

  constructor(private _item: ItemService, private _user: UserService) { }

  ngOnInit() {
  }

     newUser(person){
          this._user.createUser(person);
     }

     onClick() {
          this._item.login(this.user);
          this.person.name = this.user.name;
          this.newUser(this.user)
     }
}
