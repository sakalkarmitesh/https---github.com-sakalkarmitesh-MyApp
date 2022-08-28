import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../model/productModel';
import { ProductService } from '../../services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers:[ProductService]
})
export class CreateProductComponent implements OnInit {
  // let product;
  // product: unknown;
 product!:any;
 productForm!:FormGroup
  constructor(private _route:ActivatedRoute,private _prodService:ProductService) { }
 proCode!:string|null;
  ngOnInit(): void {
    // this.proCode=this._route.snapshot.paramMap.get('code');
    // this._prodService.getProductByCode(this.proCode).subscribe((item)=>{
    //   this.product=item;
    // });

    this.productForm=new FormGroup({
      category:new FormControl(null,Validators.required),
      name:new FormControl('',Validators.required),
      code:new FormControl('',Validators.required ),
      color:new FormControl(),
      description:new FormControl(),
      inStock:new FormControl()
      
  });
  }
click(){
  console.log(this.product);
}
submit(){
  
}
}
