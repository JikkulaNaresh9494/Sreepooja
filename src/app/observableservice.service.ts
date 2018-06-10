import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObservableserviceService {
  userId;
  constructor() { }
  mysubobs = new Subject();
  updateuservaild() {
    this.mysubobs.next();
  }
  setuserId(id) {
    this.userId = id;
  }
  getUserId(){
    return this.userId;
  }
}
