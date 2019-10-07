import { Component , OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { DaterangepickerComponent, DaterangepickerDirective } from 'ngx-daterangepicker-material';

@Component({
  selector: 'calendar-schedule',
  templateUrl: './calendar-schedule.component.html',
  styleUrls: ['./calendar-schedule.component.css']
})
export class CalendarScheduleComponent implements OnInit {


  selected: {startDate: moment.Moment, endDate: moment.Moment};
  @ViewChild(DaterangepickerDirective, {static: true}) pickerDirective: DaterangepickerDirective;
  inlineDate: any;
  inlineDateTime: any;
  picker: DaterangepickerComponent;
  constructor() {
    this.selected = {
      startDate: moment('2015-11-18T00:00Z'),
      endDate: moment('2015-11-26T00:00Z')
    }
   }

  ngOnInit() {
    this.picker = this.pickerDirective.picker;
  }
  ngModelChange(e) {
    console.log(e);
  }
  change(e) {
    console.log(e);
  }
  choosedDate(e) {
     this.inlineDate = e;
  }

  choosedDateTime(e) {
    this.inlineDateTime = e;
  }
  open(e) {
    this.pickerDirective.open(e);
  }
  clear(e) {
    // this.picker.clear(); // we can do
    this.selected = null; // now we can do
  }
}
