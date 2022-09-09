import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; Validators.minLength(8)
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/model/userdto';
import { UserService } from 'src/app/service/user.service';
import { PasswordValidator } from 'src/shared/password-validator';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  userRegister!: UserDto;
  registerForm!: FormGroup;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({

      userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      fullName: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,]),
      confirmPassword: new FormControl('',Validators.required)

    }, { validators: PasswordValidator })
  }

  get userName() {
    return this.registerForm.get('userName');
  }

  get fullName() {
    return this.registerForm.get('fullName');
  }

  get phoneNo() {
    return this.registerForm.get('phoneNo');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }

  userRegistration() {
    console.log(this.registerForm.value);
    this.userService.userSignUp(this.registerForm.value)
      .subscribe((data) => {
        console.log(data);       
      },
        (error) => {
           console.log(error);
          }  
      )  
  }

  register() {
    this.userRegistration();
    this.router.navigate(['login']);
        Swal.fire({
          title: "Yahoo",
          text: 'You are Registerd Successfully',
          icon: 'success',
          timer: 1500,
        })
  }
}
