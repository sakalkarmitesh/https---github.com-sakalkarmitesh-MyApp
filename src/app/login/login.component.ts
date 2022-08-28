import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // providers:[LoginService]
})
export class LoginComponent implements OnInit {

  userData:any[]=[];
  constructor(private _userService:LoginService,private _router:Router) { }

  ngOnInit(): void {
    this.userData=this._userService.getData();
    
  }

  userEmail:string="";
  userPassword:any="";
  isValidate:boolean=false;


  
  validate():void{
    // if(this.userData[0].email==this.userEmail && this.userData[0].password==this.userPassword){
    //     this.isValidate=true;
    // }

    this.isValidate=this._userService.validateService(this.userEmail,this.userPassword);
    if(this.isValidate){
      this._router.navigate(['dashboard']);
      this._userService.loggedIn$.next(this.isValidate);

      //storing in local storage of browser
      localStorage.setItem('email',this.userEmail);
      localStorage.setItem('password',this.userPassword);
    }
   
  }
    
  navigate(){
    this._router.navigate(['/register']);
  }
   onSubmit(form:NgForm){

   }
   passwordCheck():boolean{
    if(this.userData[0].password!=this.userPassword){
      return true;
    }
    return false;
   }
}
