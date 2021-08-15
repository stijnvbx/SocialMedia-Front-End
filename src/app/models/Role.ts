export class Role {
    public roleID: number = 0;
    public Name: string= '';
    public constructor(init?:Partial<Role>) {
        Object.assign(this, init);
    }
}