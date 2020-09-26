import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { yearValidation } from './customvalidation';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(
    public postService: DataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      year: ['', yearValidation],
    });
  }

  get f() {
    return this.form.controls;
  }

  submitForm() {
    // console.log(this.form.value);
    if (this.form.valid) {
      this.postService.createPost(this.form.value).subscribe((result) => {
        console.log('Post created successfully');
        this.router.navigateByUrl('call-api');
      });
    }

    this.submitted = true;
  }
}
