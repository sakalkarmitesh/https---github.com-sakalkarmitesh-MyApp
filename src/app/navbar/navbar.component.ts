import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string='';

  constructor(private _login:LoginService,private _router:Router) { }

  ngOnInit(): void {
    this._login.name$.subscribe((data:string)=>{
      this.username=data;
    })
  }
  click(){
console.log(this.username);
  }
  
}
