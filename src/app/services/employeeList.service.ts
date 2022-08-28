import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class EmployeeListService {
  
prodApiURL:string='api/products';
    
   private Employee:any[]=[
        {empId:1,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",department:"Developer",gender:"Male",DOB:"05/08/2000",city:"Bhandara",salary:90000},
        {empId:2,firstName:"Mitesh",middleName:"chandrashekhar",lastName:"sakalkar",department:"Sales",gender:"Male",DOB:"19/03/2000",city:"Burhanpue",salary:40000},
        {empId:3,firstName:"Sanket",middleName:"sanjay",lastName:"Bhageriya",department:"Marketing",gender:"Male",DOB:"05/08/22",city:"Akola",salary:70000},
        {empId:4,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",department:"IT",gender:"Male",DOB:"05/08/22",city:"Bhandara",salary:20000}
        
      ];
      
      //api observable aproach
      // getProductByApi():Observable<any[]>{
        // return this._http.get<any>(this.prodApiURL);
      // }
  fetchSingleEmployee: any;
    getEmployees():any[] {
        return this.Employee;
    }
    getSelectedData(id:string|null){
      return this.Employee.filter(e=>e.empId==id);
    }

    // fetchSingleEmployee(pa: any) {
    //     return this.Employee[0];
    //   }
    // getName(name:string):string{
    //     return "Mr. "+name;
    // }

}