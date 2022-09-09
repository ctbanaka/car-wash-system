import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/service/auth.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  
  orders!:Order[];

  constructor(private router:Router,
    private authservice:AuthService,
    private orderService:OrderService) { }

  ngOnInit(): void {
    const name=this.authservice.getName();


    this.orderService.getUserOrders(name).subscribe(
      (response)=> this. orders=response
    )
    

  }

}
