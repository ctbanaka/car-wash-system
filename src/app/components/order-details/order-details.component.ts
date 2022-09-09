import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetails } from 'src/app/model/order-detail';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  detail!:OrderDetails;
  constructor(private actRouter:ActivatedRoute,
    private orderService:OrderService,
    ) { }

  ngOnInit(): void {
    this.orderService.getOrderDetail(this.actRouter.snapshot.params['id']).subscribe(
      orderDetail=>{ console.log(orderDetail);
         this.detail=orderDetail;
      }
    )
    
  }

}
