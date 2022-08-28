import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers:[ProductService]
})
export class ProductViewComponent implements OnInit {
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
