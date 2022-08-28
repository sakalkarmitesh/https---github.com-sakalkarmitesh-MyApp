import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

  }
  navigate(){
    this._router.navigate(['/'])
  }

}
