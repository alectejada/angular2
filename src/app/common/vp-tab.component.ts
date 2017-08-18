import { Component, Input } from '@angular/core';

@Component({
  selector: 'vp-tab',
  template: `<div class="vp-tab-content" *ngIf="active">
    <ng-content></ng-content>
  </div>`,
  styles:[
    `.vp-tab-content { padding: 1em; }`
  ]
})
export class VpTab {
  @Input() active: boolean = false;
  @Input() title: string;
}
