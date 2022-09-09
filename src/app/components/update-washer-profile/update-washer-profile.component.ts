import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { WasherService } from 'src/app/service/washer.service';

@Component({
  selector: 'app-update-washer-profile',
  templateUrl: './update-washer-profile.component.html',
  styleUrls: ['./update-washer-profile.component.css']
})
export class UpdateWasherProfileComponent implements OnInit {
  username=this.auth.getName(); 
  editForm!:FormGroup;
   
    
  constructor(private activatedroute:ActivatedRoute,
    private washerservice:WasherService,
    private fb:FormBuilder,
    private auth:AuthService) { }

  ngOnInit(): void {
    this.editForm= new FormGroup({
      userName :new FormControl(this.username) ,
      fullName:new FormControl(''),
      phoneNo: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl('')
    } );

    this.washerservice.getWasher(this.activatedroute.snapshot.params['username']).subscribe(
      (response)=>{  
      this.editForm = new FormGroup({
        fullName:new FormControl(response['fullName']),
        phoneNo: new FormControl(response['phoneNo']),
        email: new FormControl(response['email']),
        userName:new FormControl(response['userName']),
        age:new FormControl(response['age'])
      })
  })
  }

  update(){
  console.warn(this.editForm.value)
  this.washerservice.updateWasher(this.editForm.value).subscribe(
    data=>console.log(data)
  )
  }

}
