import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../services/employeeList.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeListService]
})
export class EmployeeComponent implements OnInit {

  constructor(private _empService:EmployeeListService) { }
  userData:any[]=[];
  ngOnInit(): void {
    this.userData=this._empService.getEmployees();
    
  }
  displayedColumns: string[] = ['empId', 'firstName', 'middleName', 'lastName','department','gender','DOB','city','salary','Action'];
  // dataSource = this.userData;
validate():void{
  console.log(this.userData);
}

}
