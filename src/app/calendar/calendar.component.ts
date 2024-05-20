import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarView,
} from 'angular-calendar';
import { Subject } from 'rxjs';
import { addDays, startOfDay } from 'date-fns';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent {
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: addDays(startOfDay(new Date()), 1),
      title: 'Event 1',
      color: colors.red,
    },
    {
      start: addDays(startOfDay(new Date()), 2),
      title: 'Event 2',
      color: colors.blue,
    },
    {
      start: addDays(startOfDay(new Date()), 3),
      title: 'Event 3',
      color: colors.yellow,
    },
  ];

  refresh: Subject<any> = new Subject();

  activeDayIsOpen: boolean = true;

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
