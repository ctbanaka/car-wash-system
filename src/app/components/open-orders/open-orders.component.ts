import { Component, OnInit } from '@angular/core';
import { AcceptOrder } from 'src/app/model/accept-order';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/service/auth.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.css']
})
export class OpenOrdersComponent implements OnInit {
   show=false;
  status:string='open';
  orders!:Order[];
  accept:AcceptOrder=new AcceptOrder();
   
  
  constructor(private orderService:OrderService,private auth:AuthService) { }
  
  ngOnInit(): void {


 
    this.orderService.orderBystatus(this.status).subscribe(
      (response)=> this.orders=response
    )

  }

acceptOrder(orderId:any){
 console.log(orderId);
 this.accept.orderId=orderId;
 this.accept.washerName= this.auth.getName();
 console.log(this.accept);
this.orderService.acceptOrder(this.accept).subscribe(
  (response)=>console.log(response)
);
window.location.reload();
}



}
