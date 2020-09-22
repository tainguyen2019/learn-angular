import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getValueForm(form: NgForm) {
    if (form.valid) {
      alert(JSON.stringify(form.value));
    } else {
      alert('Form is Invalid');
    }
  }
}
