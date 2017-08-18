import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IEvent } from './../IEvent';
import { EventService } from './../event.service';
import {Validators} from "@angular/forms";

@Component({
  selector: "new-event",
  templateUrl: 'app/events/templates/new-event.html',
  styles: [
    `.new-event-form-wrapper {
      width: 80%;
      display:block;
      margin: 0 auto;
    }
    .hover { background-color: pink; border: 3px solid pink; }
    .file-drop-zone { height: 200px; width: 200px; border: 1px dashed #ccc; cursor:pointer; }
    .img-responsive { max-width: 100%; height: auto; }
    .error { color: red; }
    .new-event-form-wrapper { padding: 1em 0; }
    `
  ]
})
export class NewEventComponent implements OnInit {
 public fileUrl:string;
 public files:any;

 @Output() newevent = new EventEmitter();

 constructor(
   private eventService:EventService,
   private router:Router
) {}

 newEvent(event:IEvent) {
   console.log('new')
   console.dir(event);
   console.log(this.fileUrl);
   event.imageUrl = this.fileUrl;
   this.newevent.emit(event);
   this.eventService.create(event);
   this.router.navigate(['/events']);
 }

 ngOnInit() {

 }

 handleLoadFile(files: any) {
   console.log('loaded');
   if (files && files[0] && files[0].isLoaded) {
     console.log(files[0]);
     this.fileUrl = files[0].base64;
   }
 }

}
