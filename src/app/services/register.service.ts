import { Observable } from 'rxjs';
import { User } from './../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient){
  }
  url ='https://dev-96827083.okta.com/api/v1/users?acti3vate=true';

  
  createUser(user: User) : Observable<User>{
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization : 'SSWS00pcxhTFA1UllEd5-RsrjAXpWzXS6h1VEN4eOF0ikU'
    })
   
     return this.http.post<User>(this.url,{ 
      profile: {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "email": user.email,
      "login": user.email
     
      },
      credentials: {
        "password" : { "value": user.password }
      }
    },{headers: headers});
   
  }
}
