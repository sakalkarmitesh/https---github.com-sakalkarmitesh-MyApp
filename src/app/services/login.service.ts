import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";

@Injectable()

export class LoginService{
   user:any[]=[
    {name:'Mitesh',email:'admin@gmail.com',password:'admin'},
    {name:'suyog',email:'suyog@gmail.com',password:'admin'},
    {name:'vivek',email:'vivek@gmail.com',password:'admin'},
    {name:'shrusti',email:'shrusti@gmail.com',password:'admin'}
  ];
 
    loggedIn$:any=new ReplaySubject();
    name$:any=new Subject();
    log$:any=new Subject();
  getData():any{
    return this.user;
  }

  //this will validate the user
  validateService(userEmail: string,userPassword: any):boolean{
    for(var i=0;i<this.user.length;i++){
    if(this.user[i].email==userEmail && this.user[i].password==userPassword){
      this.name$.next(this.user[i].name);
      this.log$.next(true);
      return true;
  }
}
  return false;
  }
 
}



