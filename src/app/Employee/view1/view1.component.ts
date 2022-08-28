import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeListService } from '../../services/employeeList.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css'],
  providers:[EmployeeListService] 
})
export class View1Component implements OnInit {
  EmployeeId!: string | null;
  emp!: any[];
  constructor(private _empService:EmployeeListService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.EmployeeId= this._route.snapshot.paramMap.get('id');
    this.emp=this._empService.getSelectedData(this.EmployeeId)
  }
  navigate():void{
    this._router.navigate(['/employee']);
  }

}
