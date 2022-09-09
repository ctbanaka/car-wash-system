import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WasherDto } from 'src/app/model/washerdto';
import { WasherService } from 'src/app/service/washer.service';

@Component({
  selector: 'app-all-washers',
  templateUrl: './all-washers.component.html',
  styleUrls: ['./all-washers.component.css']
})
export class AllWashersComponent implements OnInit {
   washers!:WasherDto[];
  constructor(private router:Router,private washerService:WasherService) { }

  ngOnInit(): void {
   this.washerService.allwashers().subscribe(
    response=>{this.washers=response;
    
    }
   )


  }

  onDelete(username:string){
     this.washerService.deleteWasher(username).subscribe(
      (response)=>console.log(response)
     );
     window.location.reload();
  }

}
