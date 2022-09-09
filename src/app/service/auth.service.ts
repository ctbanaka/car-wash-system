import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from '../model/authenticationRequest';

@Injectable({
  providedIn: 'root'
})

 
export class AuthService {

   baseUrl:string="http://localhost:9000/authenticate"

   requestHeader=new HttpHeaders(
    
      {"No-Auth":"True"}
    
   )
  
  constructor(private http:HttpClient, ) { }
  
  login(authRequest:AuthenticationRequest): Observable<any> {
    return this.http.post(this.baseUrl,authRequest, {headers:this.requestHeader});
  }
   

  public setRole(role:string){
    localStorage.setItem("role",role)
  }

  public getRole():any{
   return localStorage.getItem('role')
  }

  public setToken(jwt:string){
    localStorage.setItem("jwtToken",jwt)
  }

  public getToken():string | null{
   return localStorage.getItem('jwtToken');
  }

  public setName(userName:string){
    localStorage.setItem("userName",userName)
  }

  public getName():any{
    return localStorage.getItem('userName');
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggenIn(){
    return this.getRole() && this.getToken();
  }

  

}
