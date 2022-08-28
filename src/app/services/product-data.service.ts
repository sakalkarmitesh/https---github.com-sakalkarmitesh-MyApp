import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { ProductModule } from "../product/product.module";

export class ProDataService implements InMemoryDbService{
    constructor(){

    }
    
    createDb() {
        return {product:[
            {category:"electronic",name:"Mobile",code:"121",color:"black",description:"vivo brand",inStock:"yes",image:"https://www.bajajfinserv.in/Image_LED_TV_1_LED_354x202_desktop.jpg"},
            {category:"Fashion",name:"T-shirt",code:"123",color:"red",description:"Peter England",inStock:"yes",image:"data:image/jpeg;base64,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"},
            {category:"electronic",name:"TV",code:"213",color:"silver",description:"Samsung",inStock:"yes",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70h6yOF7GHhiziGKBUysXJZaftS8gBYtEqA&usqp=CAU"},
            {category:"electronic",name:"Mobile",code:"123",color:"black",description:"vivo brand",inStock:"yes",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70h6yOF7GHhiziGKBUysXJZaftS8gBYtEqA&usqp=CAU"}
        
    
        ]
    };
    }
    
}