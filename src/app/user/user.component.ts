import { Component, OnInit } from '@angular/core';
import { ItemService } from './../item.service';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
     pageUser={};
     items=[];
     user={name:''};

  constructor(private _item: ItemService, private _user: UserService, private _route: ActivatedRoute) { }

     ngOnInit() {
          this.user = this._item.getUser();
          this.getUser();
          this.getAll();
     }

     getAll() {
          this._item.getAllItems()
          .subscribe(data => {
               this.items = data;
               console.log(this.items)
          }, error=>{
               console.log(`there was an error ${ error }`);
          })

     }

     getUser(){
          this._route.paramMap
          .switchMap(params=>{
               return this._user.getOneUser(params.get('id'))
          })
          .subscribe(data=>this.pageUser=data);
          // console.log(this.pageUser);
     }
     updateItem(item){

          if(item.completed===true){
               item.completed=false;
          }
          else{
               item.completed=true;
          }
          this._item.checkBox(item);
     }

     checkClick(item) {
          this.updateItem(item)
     }

 }
