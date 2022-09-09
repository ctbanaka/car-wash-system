import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserDto } from 'src/app/model/userdto';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {
  username=this.auth.getName(); 
  editForm!:FormGroup;
   
    

  constructor(private activatedroute:ActivatedRoute,
    private userservice:UserService,
    private fb:FormBuilder,
    private auth:AuthService) { }

  ngOnInit(): void {
    this.editForm= new FormGroup({
      userName :new FormControl(this.username) ,
      fullName:new FormControl(''),
      phoneNo: new FormControl(''),
      email: new FormControl('')
    } );

    this.userservice.getUser(this.activatedroute.snapshot.params['username']).subscribe(
      (response)=>{  
      this.editForm = new FormGroup({
        fullName:new FormControl(response['fullName']),
        phoneNo: new FormControl(response['phoneNo']),
        email: new FormControl(response['email']),
        userName:new FormControl(response['userName'])
      })
  })
  }

  update(){
    this.userservice.updateUser(this.editForm.value).subscribe(
      data=>console.log(data)
    )
  }
}
