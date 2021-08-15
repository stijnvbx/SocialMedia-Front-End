import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company, User } from '../models';
import { CompanyService } from '../services/company.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  company : Company = new Company();
  constructor(
    private companyService: CompanyService,
    private userService: UserService,
    private router:Router
    ){
      this.company.UserID = Number(localStorage.getItem("CurrentUserID"));
    }
    
  usersNoComp:User[] = [];
  users: Partial<User>[] = [];

  ngOnInit(): void {
  }
  onSubmit():void{
    this.companyService.createCompany(this.company).subscribe((result)=>{
      this.addToCompany(this.company.UserID!.toString(), result.companyID.toString());
      this.router.navigate(['/feed']);
    });
  }
  addToCompany(userId: string, companyID: string):void{
    this.userService.addUserToCompany(userId, companyID).subscribe(()=>{
      this.getUsers();
      this.getUsersNoComp()
    });
  }

  getUsersNoComp():void{
    this.userService.getUsersNoCompany().subscribe((users)=>{
      this.usersNoComp = users;
    })
  }

  getUsers():void{
    this.userService.getUsersOfCompany(this.users[0].Company!.companyID.toString()).subscribe((users) => {
      this.users = users.map((user) => {
        return { userID:user.userID, Name: user.firstName + " " + user.lastName, Role: user.role }
      });
    })
  }
}
