import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ProductModel } from '../model/productModel';



@Injectable()
export class ProductService {
  
prodApiURL:string='api/product';
    temp!: ProductModel;
    
   
      constructor(private _http:HttpClient){

      }

      //api observable aproach
      getProductByApi():Observable<any[]>{
        return this._http.get<any[]>(this.prodApiURL);
      }

   
    getProductByCode(code:any){
        let subject=new ReplaySubject();
        this._http.get<ProductModel[]>(this.prodApiURL).subscribe((data)=>{
            // data.map(item=>{
            //     if(item.code==code){
            //         this.temp=item;
            //     }
            // })
           this.temp= data.find(x=>x.code==code) as ProductModel;
            
            subject.next(this.temp);
            subject.complete();
        });
        return subject;
    }
   

}