import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcceptOrder } from '../model/accept-order';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  allUrl="http://localhost:8084/order/allorders";
  statusUrl:string="http://localhost:8084/order/getorders/";
  url:string="http://localhost:8084/order/place-order";
  url2:string="http://localhost:8084/order/userorders/";
  acceptUrl="http://localhost:8084/order/acceptorder";
  washerUrl ="http://localhost:8084/order/washerorders/";
   orderUrl="http://localhost:8084/order/orderdetail/"

  constructor(private http:HttpClient) { }

  placeOrder(order:Order):Observable<any>{
     return this.http.post(this.url,order);
  }

  getUserOrders(userName:string):Observable<any>{
    return this.http.get(this.url2+userName);
  }

  orderBystatus(orderStatus:string):Observable<any>{
   return this.http.get(this.statusUrl+orderStatus);
  }

  orderByWasherName(washerName:string):Observable<any>{
    return this.http.get(this.washerUrl+washerName);
   }
  

  acceptOrder(accept:AcceptOrder):Observable<any>{
    return this.http.put(this.acceptUrl,accept);
  }

  allOrders():Observable<any>{
    return this.http.get(this.allUrl);
   }
  
   getOrderDetail(orderId:number):Observable<any>{
     return this.http.get(this.orderUrl+orderId)
   }

}
