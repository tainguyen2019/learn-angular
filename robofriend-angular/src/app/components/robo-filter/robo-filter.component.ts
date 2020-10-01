import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-robo-filter',
  templateUrl: './robo-filter.component.html',
  styleUrls: ['./robo-filter.component.css'],
})
export class RoboFilterComponent implements OnInit, OnDestroy, OnChanges {
  searchForm: FormGroup;

  @Input()
  search: string;

  @Output()
  searchEvent = new EventEmitter<string>();

  searchSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: this.search,
    });

    this.searchSubscription = this.searchForm.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(({ search }) => {
        this.searchEvent.emit(search as string);
      });
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, firstChange } = changes.search;
    if (!firstChange && currentValue !== this.searchForm.value.search) {
      this.searchForm.setValue({
        search: currentValue,
      });
    }
  }
}
