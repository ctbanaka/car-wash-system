import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WasherDto } from 'src/app/model/washerdto';
import { AuthService } from 'src/app/service/auth.service';
import { WasherService } from 'src/app/service/washer.service';

@Component({
  selector: 'app-washer',
  templateUrl: './washer.component.html',
  styleUrls: ['./washer.component.css']
})
export class WasherComponent implements OnInit {
  
  washer!:WasherDto;

  constructor(private router:Router,private washerService:WasherService,private auth:AuthService) { }
  
  ngOnInit(): void {
     const name=this.auth.getName();
    this.washerService.getWasher(name).subscribe(
      (response)=> this.washer=response
    )
    
  }

}
