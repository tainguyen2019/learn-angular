import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  id: number;
  post: Post;
  constructor(
    public postService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.postService.getPost(this.id)
    .subscribe(data => {
      // console.log(data);
      this.post = data;
    });
  }

  submitForm(form){
    // let post = {...form.value, id: this.id};
    // console.log(post);
    // console.log(this.post);
    this.postService.updatePost(this.id, this.post)
    .subscribe(result =>{
      console.log('Post updated successfully!');
      this.router.navigateByUrl('call-api');
    });
  }
}
