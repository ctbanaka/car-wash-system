import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from '../model/userdto';
import { UserDtos } from '../model/UserDtos';
import { UserUpdate } from '../model/userupadte';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  requestHeader=new HttpHeaders(
    
    {"No-Auth":"True"}
  
 )

  constructor(private http:HttpClient,
    private authService:AuthService) { }

baseUrl:string= "http://localhost:8081/users/user/signup" ;
baseUrl2:string="http://localhost:8081/users/allusers";
baseUrl3:string="http://localhost:8081/users/user/";
baseUrl4:string="http://localhost:8081/users/user/update";
delUrl="http://localhost:8081/users/user/";

 userSignUp(user:UserDto):Observable<any>{
  return this.http.post<UserDto>(this.baseUrl, user);
 }
 

 allusers():Observable<any>{
  return this.http.get(this.baseUrl2);
 }

getUser(userName:string):Observable<UserDtos>{
  return this.http.get<UserDtos>(this.baseUrl3+userName);
}

updateUser(user:UserUpdate):Observable<any>{
  return this.http.put<UserUpdate>(this.baseUrl4,user);
}

deleteUser(username:string):Observable<any>{
  return this.http.delete(this.delUrl+username);
}


public roleMatch(allowedRole:string):boolean{
  var isMatch:boolean= false;
  const userRole:any= this.authService.getRole();

  if(userRole!=null && userRole===allowedRole){
     isMatch=true;
  }
    return isMatch;
}

}
