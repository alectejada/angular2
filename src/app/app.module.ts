import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { EvNavbarComponent }  from './navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  EventListComponent,
  EventItemComponent,
  EventFilterComponent,
  NewEventComponent
} from './events/components/index';

import {
  FileModel,
  FileValidator,
  EvFileDrop,
  VpTab,
  VpTabs,
  VpModal,
  EvMessage,
  EvMessages
 } from './common/index';

 import { EventService } from "./events/event.service";
 import { EventsResolver } from "./events/events.resolver";

import AppRoutes  from "./app.routes";

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule.forRoot(), RouterModule.forRoot(AppRoutes) ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventItemComponent,
    EventFilterComponent,
    NewEventComponent,
    EvNavbarComponent,
    EvMessage,
    EvMessages,
    VpTab,
    VpTabs,
    VpModal,
    EvFileDrop,
    FileModel,
    FileValidator
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    EventService,
    EventsResolver
  ]
})
export class AppModule { }
