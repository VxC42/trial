import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs';

import { Item } from './item';

@Injectable()
export class ItemService {
     user = { name: "" };

     constructor(private _http: Http) { }

     login(username) {
          this.user = username;
     }

     getUser() {
          return this.user;
     }

     getAllItems(){
          console.log("Getting all bucket list items");
          return this._http.get('/items')
           .map(data => data.json());
     }

     createItem(item) {
          console.log("creating item");
          this._http.post('/create', item)
          .map(data => data.json())
          .toPromise();
     }

     checkBox(item){
          console.log("step2", item);
          this._http.put('/checkBox', item)
          .map(data => data.json())
          .toPromise();

     }
}
