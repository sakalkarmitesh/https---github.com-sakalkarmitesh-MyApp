import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { Router } from '@angular/router';
import { EmployeeListService } from 'src/app/services/employeeList.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers:[EmployeeListService]
})
export class ViewComponent implements OnInit {
  EmployeeId!: string | null;
  //  Employee:any[]=[
  //   {empId:1,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",department:"IT",salary:20000},
  //   {empId:2,firstName:"Mitesh",middleName:"chandrashekhar",lastName:"Sahu",department:"IT",salary:20000},
  //   {empId:3,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",department:"IT",salary:20000},
  //   {empId:4,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",department:"IT",salary:20000}
    
  // ];
  editMode!: string | null;
  // firstname:string="Aman";
  // lastname:string="sahu";
  // department:string="IT";
  emp!: any[];
  delete!: string | null;
  constructor(private _route:ActivatedRoute, private _empService:EmployeeListService,public dialog: MatDialog,private _router:Router) { }

  ngOnInit(): void {
    this.EmployeeId= this._route.snapshot.paramMap.get('id');
    // this._route.queryParamMap.subscribe(qParam=>{
    //   this.editMode=qParam.get('editMode')
    //   console.log(this.editMode)
    // })
    this._route.queryParamMap.subscribe(qParam=>{
      this.delete=qParam.get('delete')
      console.log(this.delete)
    })
  this.emp=this._empService.getSelectedData(this.EmployeeId)
  }
  openDialog(){
    // console.log(this.emp[0].lastName);
    this.dialog.open(DialogComponent)
    
   }
   navigate(){
    this._router.navigate(['/employee']);
    }
}
