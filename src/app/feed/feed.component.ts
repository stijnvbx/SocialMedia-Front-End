import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post, User } from '../models';
import { FormBuilder } from '@angular/forms';
import { AuthService, loginDetails } from '../services/auth.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  postingForm = this.formBuilder.group({
    text: '',
  })
  posts: Post[] = [];
  constructor(private authService: AuthService, private postService: PostService, private formBuilder: FormBuilder,) { }
  login: loginDetails = new loginDetails;
  user: User = new User;
  ngOnInit(): void {
    this.authService.getLogDetails().subscribe(async result => {
      this.login = { ...result }
      if (result.isLogged) {
        this.authService.fetchMyUser().subscribe((user)=>{
          this.user = user;
        });
      }
    })
    this.getPosts();
  }
  submitPost() {
    if (this.postingForm.value.text != '') {
      this.postService.createPost(this.postingForm.value.text, this.user).subscribe(result => {
        this.getPosts();
        this.postingForm.reset();
      });
    }

  }
  deletePost(_id: string) {
    this.postService.deletePost(_id).subscribe(() => this.getPosts());
  }
  getPosts() {
    this.postService.getPosts().subscribe(result => {
      this.posts = [...result];
    });
  }
  toggleLike(_id: string) {
    this.postService.likePost(_id, this.user.userID.toString()).subscribe(() => this.getPosts());
  }
  didILikeIt(likes: User[]): boolean {
    return likes.find(user => user.userID = this.user.userID) ? true : false;
  }

}
