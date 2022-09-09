import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/service/auth.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-washer-orders',
  templateUrl: './washer-orders.component.html',
  styleUrls: ['./washer-orders.component.css']
})
export class WasherOrdersComponent implements OnInit {
   orders!:Order[];
  constructor(private orderService:OrderService,private auth:AuthService,private router:Router) { }
  
  ngOnInit(): void { 
    this.orderService.orderByWasherName(this.auth.getName()).subscribe(
      (response)=>this.orders=response
    );
    (err: any)=>console.log(err)
  }

}
