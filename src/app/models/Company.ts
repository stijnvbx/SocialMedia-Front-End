import { User } from "./User";

export class Company {
    public companyID: number = 0;
    public Name: string = '';
    public Location: string= '';
    public Description: string= '';
    public UserID?: number;
    public constructor(init?:Partial<Company>) {
        Object.assign(this, init);
    }
}