import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  // you can override any of the methods defined in the parent class

  monthTooltip(event: CalendarEvent): string {
    return event.title;
  }

  weekTooltip(event: CalendarEvent): string {
    return event.title;
  }

  dayTooltip(event: CalendarEvent): string {
    return event.title;
  }
}
