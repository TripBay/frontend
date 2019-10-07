import { CalendarScheduleComponent } from './calendar-schedule.component';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { By } from '@angular/platform-browser';

describe('CalendarScheduleComponent', () => {
  let component: CalendarScheduleComponent;
  let fixture: ComponentFixture<CalendarScheduleComponent>;
  const opener = '.form-control';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarScheduleComponent ],
      imports: [
        FormsModule,
        NgxDaterangepickerMd.forRoot(),
        MatToolbarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call change and ngModelChange on select date range', fakeAsync(() => {
    spyOn(component, 'change');
    spyOn(component, 'ngModelChange');
    fixture.debugElement.queryAll(By.css(opener))[0].nativeElement.click();
    let table = fixture.nativeElement.querySelectorAll('table');
    let trs = table[0].querySelectorAll('tr');
    let tds = trs[4].querySelectorAll('td');
    setTimeout(() => {
      tds[0].click();
      fixture.detectChanges();
    }, 500);
    tick(500);
    setTimeout(() => {
      tds[4].click();
      fixture.detectChanges();
    }, 500);
    tick(500);
    setTimeout(() => {
      fixture.debugElement.queryAll(By.css('button'))[1].nativeElement.click();
      fixture.detectChanges();
    }, 200);
    tick(200);
    expect(component.change).toHaveBeenCalled();
    expect(component.ngModelChange).toHaveBeenCalled();
}))
});
