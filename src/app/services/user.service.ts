import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsersOfCompany(companyID:string): Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44348/api/User/Company/"+companyID);
  }
  getUserFromId(userId:string): Observable<User>{
    return this.http.get<User>("https://localhost:44348/api/User/"+userId);
  }
  editUser(user:User): Observable<User>{
    return this.http.put<User>("https://localhost:44348/api/User/"+user.userID,{Role:user.role.roleID});
  }
  getUsersNoCompany():Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44348/api/User/noCompany");
  }
  addUserToCompany(userID:string, companyID:string):Observable<User>{
    return this.http.get<User>("https://localhost:44348/api/User/addToCompany/" + userID + "/" + companyID);
  }
}
