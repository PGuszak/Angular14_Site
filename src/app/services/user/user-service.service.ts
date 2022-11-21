import { Injectable } from '@angular/core';
import { User } from 'src/app/User';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


//make head headers here 
//more header examples here: https://www.tektutorialshub.com/angular/angular-httpheaders/
const httpHeaders = {
  headers: new HttpHeaders ({
    'Content-type': 'appication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiURL = "http://localhost:5000/Users";

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  addUser(newUser:User):Observable<User>{
    console.log(newUser);
    return this.http.post<User>(this.apiURL, newUser, httpHeaders);
  }
}
