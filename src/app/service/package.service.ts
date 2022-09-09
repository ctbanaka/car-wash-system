import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Package } from '../model/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  
  url="http://localhost:8082/package/"
  constructor(private http: HttpClient) { }

  
  getPackage(packageName:string):Observable<any>{
   return this.http.get(this.url+packageName)
  }

  updatePackage(apackage:Package):Observable<any>{
    return this.http.put<Package>(this.url,apackage);
  }
  
  getAllPackages():Observable<any>{
    return this.http.get(this.url+'list');
  }
  
}