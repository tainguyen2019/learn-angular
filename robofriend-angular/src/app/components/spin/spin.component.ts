import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css'],
})
export class SpinComponent implements OnInit, OnChanges {
  @Input()
  loading: boolean;

  constructor() {}

  ngOnInit(): void {
    if (this.loading) {
      this.toggleScroll();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, previousValue } = changes.loading;
    if (currentValue !== previousValue) {
      this.toggleScroll();
    }
  }

  toggleScroll() {
    document.body.classList.toggle('no-scroll');
  }
}
