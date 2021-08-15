import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, User} from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("https://localhost:44348/api/Post");
  }
  createPost(Content: string, Author: User): Observable<Post>{
    return this.http.post<Post>("https://localhost:44348/api/Post",{Text: Content,UserID:Author.userID});
  }
  deletePost(_id:string):Observable<any>{
    return this.http.delete(`Post/${_id}`);
  }
  likePost(_id:string, userID: string):Observable<any>{
    return this.http.get(`Post/${_id}/like/` + userID);
  }
}
