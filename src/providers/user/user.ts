import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  userLocal;
  constructor(
    public http: HttpClient,
    private storage: Storage,
  ) {
    console.log('Hello UserProvider Provider');
    this.getUser();
  }


  setUser(user){
    this.userLocal = user;
    return this.storage.set("user",user);
  }
  getUser(){
    return this.storage.get("user").then((user) => {
      this.userLocal = user;
    })
  }
  removeUser(){
    this.userLocal = null;
    return this.storage.remove("user");
  }

}
