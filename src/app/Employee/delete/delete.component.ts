import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EmployeeListService } from 'src/app/services/employeeList.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[EmployeeListService]
})
export class DeleteComponent implements OnInit {

  constructor(private _empService:EmployeeListService,
              private _route:ActivatedRoute,
              private _router:Router,public dialog:MatDialog) { 
                
              }


              EmployeeId!:string|null;
              emp!:any[];
  ngOnInit(): void {
    this.EmployeeId=this._route.snapshot.paramMap.get('id');
    this.emp=this._empService.getSelectedData(this.EmployeeId);
  }
  
  openDialog(){
    // console.log(this.emp[0].lastName);
    this.dialog.open(DeleteDialogComponent)
    
   }
}
