import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/model/package';
import { PackageService } from 'src/app/service/package.service';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.css']
})
export class AllPackagesComponent implements OnInit {

  constructor(private packageService:PackageService) { }
   apackages!:Package[];
  ngOnInit(): void {

      this.packageService.getAllPackages().subscribe(
      (data)=> this.apackages= data,
  
      )
  }

}
