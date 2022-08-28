import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  providers:[ProductService]
})
export class ProductEditComponent implements OnInit {

  product!:any;
  constructor(private _route:ActivatedRoute,private _prodService:ProductService) { }
  proCode!:string|null;
  ngOnInit(): void {
    this.proCode=this._route.snapshot.paramMap.get('code');
    this._prodService.getProductByCode(this.proCode).subscribe((item)=>{
      this.product=item;
    });
  }
  
  navigate(){
    
  }
}
