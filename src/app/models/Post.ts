import { User, UserComment } from "./index";
export class Post {
    public postID: number = 0;
    public text: string= '';
    public user: User = new User;
    public likes?: User[] = [new User];
    public constructor(init?:Partial<Post>) {
        Object.assign(this, init);
    }
}