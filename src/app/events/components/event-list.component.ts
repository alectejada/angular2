import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IEvent } from './../IEvent';
import { EventService } from "./../event.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'event-list',
  templateUrl: 'app/events/templates/event-list.html'
})
export class EventListComponent implements OnInit {
  public events: Observable <IEvent[]> = Observable.of([]);

  constructor(
    private eventService:EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.data.map((data:any) => data.events).share();
  }
}
