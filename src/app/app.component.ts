import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ev-navbar></ev-navbar>
    <div class="container app-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      nav { height: 60px; border-bottom: 1px solid #ccc;}
      .app-content { padding: 1em 0;}
    `
  ]
})
export class AppComponent {
  private isFileOver:boolean = false;
  handleNewEvent(event:any) {
    console.log(event);
  }
}
