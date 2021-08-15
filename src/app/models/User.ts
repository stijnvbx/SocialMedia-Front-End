import { Role } from ".";
import { Company } from "./Company";

export class User {
    public userID: number = 0;
    public firstName: string= '';
    public lastName: string= '';
    public Email: string= '';
    public roleID: number = 0;
    public role: Role= new Role;
    public companyID: number | undefined;
    public Company?: Company= new Company;
    public constructor(init?:Partial<User>) {
        Object.assign(this, init);
    }
}