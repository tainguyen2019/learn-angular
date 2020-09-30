import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-robo-filter',
  templateUrl: './robo-filter.component.html',
  styleUrls: ['./robo-filter.component.css'],
})
export class RoboFilterComponent implements OnInit {
  searchForm: FormGroup;

  @Output()
  searchEvent = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  onSubmit() {
    const { search } = this.searchForm.value;
    this.searchEvent.emit(search);
  }
}
