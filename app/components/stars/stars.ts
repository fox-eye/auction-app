import { Component, EventEmitter, Input, Output, OnChanges, SimpleChange } from '@angular/core';
@Component({
  selector: 'auction-stars',
  styles: [`.starrating { color: #d17581; }`],
  templateUrl: 'app/components/stars/stars.html'
})
export default class StarsComponent implements OnChanges {
  private _rating: number;
  private stars: boolean[];

  private maxStars: number = 5;

  @Input() readonly: boolean = true;

  @Input() get rating(): number {
    return this._rating;
  }
  set rating(value: number) {
    console.log('set rating!', value);
    this._rating = value || 0;
    this.stars = Array(this.maxStars).fill(true, 0, this.rating);
  }

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  fillStarsWithColor(index) {
    console.log('readonly ?', this.readonly);
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}