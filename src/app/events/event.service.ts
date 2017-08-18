import { Injectable } from "@angular/core";
import { IEvent } from "./IEvent";
import { Observable } from "rxjs/Rx";

function Collection({url, model}:{url:string, model?: any}) {
  return function (constructor:Function) {
    (constructor as any).url = "lol";
    console.log(constructor);
  };
}

const events = [
  {
    name: "uno",
    ocurrence: {
      startDate: new Date(),
      endDate: new Date()
    },
    location: {
      city: "ciudad1",
      state: "state1",
      address: "address1"
    },
    description: "description1",
    imageUrl: 'http://via.placeholder.com/150x100'
  },
  {
    name: "dos",
    ocurrence: {
      startDate: new Date(),
      endDate: new Date()
    },
    location: {
      city: "ciudad1",
      state: "state1",
      address: "address1"
    },
    description: "description1",
     imageUrl: 'http://via.placeholder.com/150x100'
  },
  {
    name: "tres",
    ocurrence: {
      startDate: new Date(),
      endDate: new Date()
    },
    location: {
      city: "ciudad1",
      state: "state1",
      address: "address1"
    },
    description: "description1",
    imageUrl: 'http://via.placeholder.com/150x100'
  },
  {
    name: "cuatro",
    ocurrence: {
      startDate: new Date(),
      endDate: new Date()
    },
    location: {
      city: "ciudad1",
      state: "state1",
      address: "address1"
    },
    description: "description1",
    imageUrl: 'http://via.placeholder.com/150x100'
  },
  {
    name: "cinco",
    ocurrence: {
      startDate: new Date(),
      endDate: new Date()
    },
    location: {
      city: "ciudad1",
      state: "state1",
      address: "address1"
    },
    description: "description1",
    imageUrl: 'http://via.placeholder.com/150x100'
  },
];

@Injectable()
@Collection({
  url: ""
})
export class EventService {
  constructor() {}

  get(filter?:any):Observable<any> {
    return Observable.of(events);
  }

  getOne(index:number) {
    return Observable.of(events[index]);
  }

  create(event:IEvent) {
    event.ocurrence.startDate = this.createDate(event.ocurrence.startDate);
    event.ocurrence.endDate = this.createDate(event.ocurrence.endDate);
    events.push(event);
    return Observable.of(event);
  }

  createDate({year, month, day}: {year:number, month:number, day:number}) {
    return new Date(year, month, day);
  }

  delete(index:number) {
    events.splice(index, 1);
    return Observable.of({ success: true});
  }
}
