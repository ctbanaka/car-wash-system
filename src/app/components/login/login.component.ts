import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private authService:AuthService,
    private router:Router,private fb:FormBuilder) { }

    loginForm!:FormGroup;
    err!:HttpErrorResponse;

    check:string='';

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })

  }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (response:any)=>{
         
        this.authService.setToken(response.jwt);
        this.authService.setRole(response.role);
        this.authService.setName(response.userName);

        const role:any = this.authService.getRole();
         this.roles(role);
      },
      (error)=>{console.log(error.status);
         if(error.status!=200){
           
           Swal.fire({
            timer:700,
            text:"invalid Cedentials",
            icon:'error',
            confirmButtonColor:'#fff',
           });

         }
      }
    );
      
       
    } 

    roles(role:any):void{
      
      if(role=="ADMIN"){
        this.router.navigate(['admin']);
      }

      if(role=="WASHER") {
        this.router.navigate(['washer']);
      }

       else if(role=="USER"){
        this.router.navigate(['user'])
      }
    }

}


 
 