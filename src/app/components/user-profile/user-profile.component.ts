import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserDtos } from 'src/app/model/UserDtos';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service'; 
 
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user!:UserDtos;

  constructor(private userService:UserService,
    private router:Router, 
    private authservice:AuthService,
    public matdialog:MatDialog) { }

  ngOnInit(): void {
    const name=this.authservice.getName();
   
    this.userService.getUser(name).subscribe(
    (data)=>this.user=data
   )
    
  }

  update(username:string){

    
  }

}
