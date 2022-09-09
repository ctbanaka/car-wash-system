import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Package } from 'src/app/model/package';
import { AuthService } from 'src/app/service/auth.service';
import { OrderService } from 'src/app/service/order.service';
import { PackageService } from 'src/app/service/package.service';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
   
  isDisabled:boolean=true;
   package!:Package;
   orderForm!:FormGroup;
   userName= this.auth.getName();
  show=false;
   
  constructor(private orderService:OrderService,
    private router:Router,private fb:FormBuilder,
    public packageService:PackageService,
    private auth:AuthService) { }

  ngOnInit(): void {
   this.orderForm=this.fb.group({
    orderId:[''],
    userName:[this.userName,Validators.required],
    street: ['',[Validators.required]],
    city:['',[Validators.required]],
    pincode:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(6),Validators.maxLength(6)]],
    carBrand:['',[Validators.required]],
    model:['',[Validators.required]],
    color:['',[Validators.required]],
    packageName:['',[Validators.required]],
    washerName:[''],
    totalPrice:['',[Validators.required]],
    orderStatus:[''],
    placedOn:[''],

   });

  }

  get street(){
   return this.orderForm.get('street');
  }

  get city(){
    return this.orderForm.get('city')
  }

  get pincode(){
    return this.orderForm.get('pincode')
  }

  get carBrand(){
    return this.orderForm.get('carBrand')
  }

  get model(){
    return this.orderForm.get('model')
  }
  
  get color(){
    return this.orderForm.get('color') 
  }

  get packageName(){
    return this.orderForm.get('packageName') 
  }


  onClick(packageName:string){
  this.orderForm.patchValue({packageName:packageName});
   
  

  this.packageService.getPackage(packageName).subscribe(
    (response)=>{
         this.package= response;
    }
   )
   this.orderForm.patchValue({totalPrice:this.package.price});
   this.show=true;
  }

  book() {
    console.log(this.orderForm.value)
    this.orderService.placeOrder(this.orderForm.value).subscribe(
      (data)=>console.log(data)
      
    );
    Swal.fire({
      title:'Hurray!',
      text: 'Ordered successfully',
      icon:'success',
      timer:1500

    })
     
    this.router.navigate(['user']);
  }

  get totalPrice():any {
    return this.orderForm.get('totalPrice');
  }
   

 
}
