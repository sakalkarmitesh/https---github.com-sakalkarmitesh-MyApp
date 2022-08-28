import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeListService } from '../services/employeeList.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  empId!: string | null;
  userData:any[]=[];
  constructor(private _activatedRoute:ActivatedRoute,private empService:EmployeeListService) {

   }
    

  ngOnInit(): void {
    
    this.empId= this._activatedRoute.snapshot.paramMap.get('id');
    this.userData=this.empService.getEmployees();
    }
    
    clicked(){
      console.log(this.userData);
    }

  }


