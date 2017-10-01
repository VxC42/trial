import { Component, OnInit } from '@angular/core';
import { ItemService } from './../item.service';
import { UserService } from './../user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = {};
  item={};
  items = [];
  users=[];


  constructor(private _item: ItemService, private _user: UserService) { }

  newItemEvent(eventData){
       console.log(eventData);
 }

  ngOnInit() {
    this.user = this._item.getUser();    // for welcome message
    this.getAll();
    this.getUsers();
  }
       refreshDashEmit(eventData){
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

     getUsers() {
          this._user.getAllUsers()
          .subscribe(data => {
               this.users = data;
          }, error=>{
               console.log(`there was an error ${ error }`);
          })
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
