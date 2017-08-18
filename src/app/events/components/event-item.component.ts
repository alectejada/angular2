import { Component, Input } from '@angular/core';
import { IEvent } from './../IEvent';

@Component({
  templateUrl: 'app/events/templates/event-item.html',
  selector: 'event-item',
  styles: [
    `.event-image { height: 100px; }`
  ]
})
export class EventItemComponent {
  @Input() event: IEvent;
}
