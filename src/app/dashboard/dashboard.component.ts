import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username!: string;

  constructor(private _router:Router,private _login:LoginService) { }

  ngOnInit(): void {
    this._login.name$.subscribe((data:string)=>{
      this.username=data;
    })
  }
isLogout:boolean=false;
  logout():void{
    this.isLogout=true;
    console.log("mitesh");
  }
  navigate(){
// this._router.navigate(['/employee']);
this._router.navigate(['/']);
  }
  emp(){
    
  this._router.navigate(['/employee']);
  }
}
