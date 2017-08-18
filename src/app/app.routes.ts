import { Route } from "@angular/router";
import {
  EventListComponent,
  NewEventComponent
} from "./events/components/index";

import { EventsResolver } from "./events/events.resolver";

const routes: Route[] = [
    { path: "events", component: EventListComponent , resolve: { events: EventsResolver } },
    { path: "events/create", component: NewEventComponent },
    { path: "", redirectTo: "events", pathMatch: "full"}
];

export default routes;
