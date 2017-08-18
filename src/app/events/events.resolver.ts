import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { IEvent } from "./IEvent";
import { EventService } from "./event.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class EventsResolver implements Resolve<IEvent[]> {
  constructor(private events:EventService) {

  }
  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<IEvent[]> {
    return this.events.get();
  }
}
