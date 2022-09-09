import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  constructor(private authService:AuthService,
    private router:Router,public userService:UserService) { }
    
  ngOnInit(): void {
  }

  public isLoggedIn(){
    return this.authService.isLoggenIn();
  }

  public logout(){
    this.authService.clear();
    this.router.navigate(['/home'])
  }


}
