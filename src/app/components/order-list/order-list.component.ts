import { Component, OnInit } from '@angular/core';
import { AcceptOrder } from 'src/app/model/accept-order';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/service/auth.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  show=false;
  status:string='open';
  orders!:Order[];
  accept:AcceptOrder=new AcceptOrder();
  role!:string;
  
  constructor(private orderService:OrderService,private auth:AuthService) { }
  
  ngOnInit(): void {

    this.role=this.auth.getRole();
 
    this.allOrders();

  }

  allOrders(){
    this.orderService.allOrders().subscribe(
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

orderStatus(status:string){
//this.orders.filter((order:Order)=>order.orderStatus.includes(status));
if(status==="all"){
this.allOrders();
}
else{

  this.orderService.orderBystatus(status).subscribe(
    (response)=>this.orders=response
    );
  }

}
ordersToWasher(){
 // this.orders.filter((order:Order)=>order.washerName.includes(this.auth.getName()));
 this.orderService.orderByWasherName(this.auth.getName()).subscribe(
  (response)=>{
      this.orders = response;
   }
);
}


}
