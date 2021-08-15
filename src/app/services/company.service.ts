import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) { }

  createCompany(company:Company): Observable<Company>{
    return this.http.post<Company>("https://localhost:44348/api/Company/",company); 
  }

  getMyCompany(companyID:string):Observable<Company>{
    return this.http.get<Company>("Company/"+companyID);
  }
  editCompany(company:Company):Observable<Company>{
    return this.http.put<Company>("Company/"+company.companyID,company);
  }
}
