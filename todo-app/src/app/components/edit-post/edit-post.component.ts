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
<<<<<<< HEAD
      // console.log(data);
=======
      console.log(data);
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
      this.post = data;
    });
  }

  submitForm(form){
<<<<<<< HEAD
    // let post = {...form.value, id: this.id};
    // console.log(post);
    // console.log(this.post);
    this.postService.updatePost(this.id, this.post)
=======
    let post = {...form.value, id: this.id};
    this.postService.updatePost(this.id, post)
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
    .subscribe(result =>{
      console.log('Post updated successfully!');
      this.router.navigateByUrl('call-api');
    });
  }
}
