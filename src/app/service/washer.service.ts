import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Washer } from '../model/Washer';
import { WasherUpdate } from '../model/washer-update';

@Injectable({
  providedIn: 'root'
})
export class WasherService {
   getUrl="http://localhost:8085/washers/washer/"
   applyurl="http://localhost:8085/washers/washer/signup";
   allurl:string="http://localhost:8085/washers/allwashers";
   update:string="http://localhost:8085/washers/washer/update";
   delUrl:string='http://localhost:8085/washers/washer/';

  constructor(private http:HttpClient) { }

  washerapply(washer:Washer):Observable<any>{
    return this.http.post(this.applyurl,washer);
  }

   allwashers():Observable<any>{
    return this.http.get(this.allurl);
   }

   getWasher(userName:string):Observable<any>{
    return this.http.get(this.getUrl+userName);
   }

   updateWasher(washer:WasherUpdate):Observable<any>{
    return this.http.put(this.update,washer)
   }

   deleteWasher(userName:string):Observable<any>{
    return this.http.delete(this.delUrl+userName);
   }

}

