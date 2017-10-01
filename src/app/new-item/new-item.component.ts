import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from './../item.service';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
     user = { name:''};
     users=[];
     currUser = {};
     taggedUser="";

     item ={
         user:"",
         title:"",
         description:"",
         completed:false,
     }
     @Output() dashEventEmitter = new EventEmitter();

  constructor(private _item: ItemService, private _user: UserService, private _router: ActivatedRoute) { }

  ngOnInit() {
     this.currUser = this._item.getUser();
     this.getUser();
     this.getUsers();
  }

  getUser() {
    this.item.user = this._item.getUser().name;
  }

  getUsers() {
       this._user.getAllUsers()
       .subscribe(data => {
            this.users = data;
            console.log(this.users)
       }, error=>{
            console.log(`there was an error ${ error }`);
       })
  }
     newItem(item){
          this._item.createItem(item);
     }

     appendItem(name, item){
          item.user = name;
          this.newItem(item);
     }

     onSend() {
          this.newItem(this.item);
          if (this.taggedUser && (this.taggedUser != this.item.user)){
               this.appendItem(this.taggedUser, this.item)
          }
          this.dashEventEmitter.emit(this.item);
     }


}
