import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap , map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.css']
})
export class BookingSearchComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Philippines', 'Japan', 'Korea', 'United States', 'Canada', 'Alaska'];
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
