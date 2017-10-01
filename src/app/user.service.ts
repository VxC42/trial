import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs';

import { User } from './user';


@Injectable()
export class UserService {
     item ={
         user:"",
         title:"",
         description:"",
         completed:false,
     }
     constructor(private _http: Http) { }

     getAllUsers(): Observable<User[]>{
          console.log("Getting all users");
          return this._http.get('/users')
          .map(data => data.json());
        }

     createUser(name) {
          console.log("creating user ", name);
          this._http.post('/createUser', name)
          .map(data => data.json());
     }

     checkUser(user){
          console.log("checking for user");
          this._http.get('/checkUser', user)
          .map(data=> data.json());
     }

     getOneUser(id:string) : Observable<User[]>{
          return this._http.get('/user/'+ id)
          .map(data => data.json());
     }

     appendGoal(user_id, goal){
          this.item = goal;
          console.log(this.item);
          console.log(`adding ${this.item} to userid ${user_id}`);
          this._http.get('/appendGoal/' + user_id, goal)
          .map(data => data.json());
     }

}
