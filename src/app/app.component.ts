import { Component } from '@angular/core';
import {LoginService} from './services/login.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[LoginService]
})
export class AppComponent {
  title = 'MyApp';
  // validate:boolean=false;
constructor(private _login:LoginService){

}

username:string='mitesh';
isValidate:boolean=false;
logged:boolean=false;
ngOnInit(): void {
  // this.validate=this._login.validateService('admin@gmail.com','admin' );
  this._login.loggedIn$.subscribe((data:boolean)=>{
   this.isValidate=data;
   console.log(this.isValidate);
  })
  
  this._login.name$.subscribe((data:string)=>{
    this.username=data;
  })

  this._login.log$.subscribe((data:boolean)=>{
    this.logged=data;
  })
   
  
}
click(){
  console.log(this.isValidate);
}

// checklg:boolean=this._login.log;


 



}