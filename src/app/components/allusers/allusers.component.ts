import { Component, OnInit } from '@angular/core';
import { UserDtos } from 'src/app/model/UserDtos';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  
  users!:UserDtos[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.allusers().subscribe(
      (response)=> this.users=response);

  }

  onDelete(username:string){
    this.userService.deleteUser(username).subscribe(
      data=>console.log(data)
    );

    window.location.reload();

    
  

   
    }
}
