import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../services/employeeList.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  product!: any[];

  constructor(private _prodService:ProductService) { }

  displayedColumns: string[] = ['url','category', 'name', 'code', 'color','action'];

  ngOnInit(): void {
    this._prodService.getProductByApi().subscribe((empdata)=>{
      this.product=empdata;
    });
    
  }
  click(){
    console.log(this.product);
  }

}
