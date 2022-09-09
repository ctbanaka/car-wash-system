import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WasherService } from 'src/app/service/washer.service';
import { PasswordValidator } from 'src/shared/password-validator';

@Component({
  selector: 'app-washer-apply',
  templateUrl: './washer-apply.component.html',
  styleUrls: ['./washer-apply.component.css']
})
export class WasherApplyComponent implements OnInit {

  constructor(private washerService:WasherService,private router:Router, private fb:FormBuilder) { }

applyForm!:FormGroup;

  ngOnInit(): void {
    this.applyForm=this.fb.group({
      userId:[''],
      userName:['',[Validators.required]],
      fullName:['',[Validators.required]],
      gender:['',[Validators.required]],
      phoneNo:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]],
      age:['',[Validators.required,Validators.min(18),Validators.max(50)]],
      role:[''],
      isActive:['']
       
  
    },{validators: PasswordValidator})
  }

  get userName(){
    return this.applyForm.get('userName');
  }

  get fullName(){
    return this.applyForm.get('fullName');
  }

  get gender(){
    return this.applyForm.get('gender');
  }

  get phoneNo(){
    return this.applyForm.get('phoneNo');
  }

  get password(){
    return this.applyForm.get('password');
  }

  get age(){
    return this.applyForm.get('age');
  }
  get email() {
    return this.applyForm.get('email');
  }

  get confirmPassword(){
    return this.applyForm.get('confirmPassword');
  }

 apply(){
 console.log(this.applyForm.value);
 this.washerService.washerapply(this.applyForm.value).subscribe(
   response=>{console.log(response);}
 );
 alert('applied successfully')
 this.router.navigate(['login']);
  }
}
